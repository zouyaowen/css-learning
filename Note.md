
# css-learning
css learning


# build process
```shell
npm create vite@latest

Ok to proceed? (y) y
✔ Project name: … css-learning
✔ Target directory "css-learning" is not empty. Please choose how to proceed: › Ignore files and continue
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript

Scaffolding project in /Users/zouyaowen/vue/css-learning...

Done. Now run:

  cd css-learning
  npm install
  npm run dev

```

# 项目中使用normalize.css
```shell
# 安装
npm install --save normalize.css 
# main.js引入
import 'normalize.css/normalize.css'

# 如果引入报错，可能没有安装css-loader 和style-loader
npm install css-loader style-loader
```