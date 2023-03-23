import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.menudelhogar.app',
  appName: 'menudelhogarcapacitor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.58',
  }
};

export default config;
