# jx_minimal_plugin
一个最基本的hello world Kibana插件，该插件创建了一个Visualize组件，名为 Hello World Metric，内容输出Hello World。

由于是使用了[A Yeoman Generator](https://github.com/elastic/generator-kibana-plugin)组件生成模板时，用了最小化的--minimal参数，故以此命名。

## 创建Kibana插件的流程和注意事项

- 使用的前端框架是angular框架
- 需要的辅助工具是[A Yeoman Generator for Kibana Plugins](https://github.com/elastic/generator-kibana-plugin)
- kibana没有向前兼容机制，每个组件需要对kibana不同的版本维护各自的代码。

## kibana插件的三种主要类型
  - app
    独立工具，呈现在kibana左侧导航栏中，典型的例子是kibana内置的Timelion

  - vis组件
    可视化组件，比如本插件中创建的Hello World Metric，创建后可以被灵活组装在dashboard中

  - 其他
    hack方法，可以添加一些自定义的脚本内容，比如给body添加一些按钮事件等等。

## 开发注意事项
必不可少的开发工具[kibana-plugin-helpers](https://github.com/spalger/kibana-plugin-helpers)
。它可以让你在本地的kibana启动时自动加载该组件，方便调试。前提条件是组件目录必须和kibana目录平行。

[A Yeoman Generator for Kibana Plugins](https://github.com/elastic/generator-kibana-plugin) 已内置了该组件。

## 安装方式
将代码打包成zip文件后，在kibana目录执行以下命令安装：

```bash
bin/kibana-plugin install <url>
```

## 部分代码解读
- 组件的本质是npm包
- 组件入口文件是导出一个包含了kibana参数的函数
```bash
export default function (kibana) {
  return new kibana.Plugin({
    # // core code here...
    uiExports: {
      # // 其中visTypes是表示组件类型，另外两种的类型对应属性名是分别是app和hack
      visTypes: [
        # // 该路径指向组件的核心代码，plugins前缀为必填，第一个jx-minimal-plugin为组件名，后一个为对应的js文件。
                'plugins/jx-minimal-plugin/jx-minimal-plugin'
          ]
    }
  })
}
```
- 组件核心类jx-minimal-plugin.js
需要引入两个kibana核心组件，路径固定，前一个用来注册新的组件到kibana，后一个用来设置组件可视化类型
```bash
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
```

- angular页面呈现
在核心组件jx-minimal-plugin.js指定模板文件jx-minimal-plugin.html。
```bash
<div ng-controller="HelloWorldController" class="hello-world-vis">
  {{ label }}
</div>
```

页面对应的逻辑存放在jx-minimal-plugin-controller.js中。
```bash
import uiModules from 'ui/modules';

const module = uiModules.get('kibana/jx-minimal-plugin', ['kibana']);

module.controller('HelloWorldController', function($scope, Private){
  $scope.label = 'Hello World'
})
```


## 参考文献资料
- [Writing Kibana 4 Plugins – Basics](https://www.timroes.de/2015/12/02/writing-kibana-4-plugins-basics/)
- [health_metric_vis](https://github.com/DeanF/health_metric_vis)
- [elastic官网](https://www.elastic.co/guide/en/kibana/current/_installing_plugins.html)
