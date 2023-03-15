package main

import (
	"fmt"
    "os"
	"io"
	"net/http"
	"strings"
	"sync"
	"github.com/PuerkitoBio/goquery"
)

func main() {
    // Get a URL from the command line arguments
    url := os.Args[1]
    // url := "https://www.food.com/" // replace with your desired website URL

    // send a GET request to the website
    res, err := http.Get(url)
    if err != nil {
        panic(err)
    }
    defer res.Body.Close()

    // read the response body
    html, err := io.ReadAll(res.Body)
    if err != nil {
        panic(err)
    }

    // parse the HTML with goquery
    doc, err := goquery.NewDocumentFromReader(strings.NewReader(string(html)))
    if err != nil {
        panic(err)
    }

    // initialize variables to hold the biggest image URL and size
    biggestImgURL := ""
    biggestImgSize := 0

    // find all image elements on the page and loop through them using multiple threads
    var wg sync.WaitGroup
    doc.Find("img").Each(func(i int, img *goquery.Selection) {
        wg.Add(1)
        go func() {
            defer wg.Done()

            // get the image source URL
            imgSrc, exists := img.Attr("src")
            if !exists {
				imgSrc, exists = img.Attr("data-src")
				if !exists {
					return
				}
            }

			if(imgSrc[len(imgSrc) - 3:] == "gif"){
				return
			}

            // send a HEAD request to the image URL to get its size
            imgRes, err := http.Head(imgSrc)
            if err != nil {
                return
            }
            defer imgRes.Body.Close()

            // get the content length of the image response
            imgSize := int(imgRes.ContentLength)

            // update the biggest image variables if this image is bigger
            if imgSize > biggestImgSize {
                biggestImgURL = imgSrc
                biggestImgSize = imgSize
            }
        }()
    })

    // wait for all threads to finish
    wg.Wait()

    // print the biggest image URL and size
    fmt.Printf("Biggest image URL: %s\n", biggestImgURL)
    fmt.Printf("Biggest image size: %d bytes\n", biggestImgSize)
}
