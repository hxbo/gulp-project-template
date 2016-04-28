#如何使用本项目？

1.项目使用gulp和compass,确保已安装node和ruby

    $ gem install sass
    $ gem install compass

2.clone项目到本地。

    $ git clone https://github.com/hxbo/gulp-project-template.git

3.进入项目根目录，安装所需插件。

    $ npm install

4.在app目录下创建你自己的静态资源文件。

执行build命令会生成浏览器可识别的资源文件。

	$ gulp build

执行server命令启动Http服务，预览开发。

	$ gulp server

#本项目定制的命令
清理dist目录

    $ gulp clean

Build静态资源文件

    $ gulp build

启动Jasmine测试

    $ gulp test

启动http服务预览开发

    $ gulp server


