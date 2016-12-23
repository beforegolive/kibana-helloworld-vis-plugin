# jx_minimal_plugin

> 一个最基本的hello world Kibana插件
该插件创建了一个Visualize组件，名为 Hello World Metric，内容简单展示Hello World
---

## 创建Kibana插件的流程和注意事项

1:使用的前端框架是angular框架
2:需要的辅助工具是[A Yeoman Generator for Kibana Plugins](https://github.com/elastic/generator-kibana-plugin)
3：kibana没有向前兼容机制，每个组件需要对kibana不同的版本维护各自的代码。

## kibana插件的三种主要类型
  - app
    独立工具，呈现在kibana左侧导航栏中，典型的例子是kibana内置的Timelion

  - vis组件
    可视化组件，比如本插件中创建的Hello World Metric，创建后可以被灵活组装在dashboard中

  - 其他
    hack方法，可以添加一些自定义的脚本内容，比如给body添加一些按钮事件等等。

## 开发注意事项
比不可少的开发工具[kibana-plugin-helpers](https://github.com/spalger/kibana-plugin-helpers)
。它可以让你在本地的kibana启动时自动加载该组件，方便调试。前提条件是组件目录必须和kibana目录平行。

[A Yeoman Generator for Kibana Plugins](https://github.com/elastic/generator-kibana-plugin) 已内置了该组件。

## 安装方式
将代码打包成zip文件后，在kibana目录执行以下命令安装：

```bash
bin/kibana-plugin install <url>
```

## 参考文献资料
1：[Writing Kibana 4 Plugins – Basics](https://www.timroes.de/2015/12/02/writing-kibana-4-plugins-basics/)
2: [health_metric_vis](https://github.com/DeanF/health_metric_vis)
3: [elastic官网](https://www.elastic.co/guide/en/kibana/current/_installing_plugins.html)
See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md)
