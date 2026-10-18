import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      port: 9273,
      proxy: {
        '/sys-api': {
          target: 'http://localhost:9210',
          changeOrigin: true,
        },
        '/mms-api': {
          target: 'http://localhost:9210',
          changeOrigin: true,
        },
        '/fms-api': {
          target: 'http://localhost:9210',
          changeOrigin: true,
        },
        '/pay-api': {
          target: 'http://localhost:9210',
          changeOrigin: true,
        },
      },
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
  },
});
