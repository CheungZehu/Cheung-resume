<template>
  <div id="app">
    <Personal></Personal>
    <Subject></Subject>
  </div>
</template>

<script>
import Personal from './components/personal'
import Subject from './components/subject'
export default {
  name: 'app',
  components: {
    Personal,
    Subject
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: auto;
    width: 100%;
    min-width: 375px;
    box-shadow: 0 0 5px #666;
    display: flex;
    flex-direction: column;
    background-color: #e0e0e0;
  }
  #app .info{
    width: 100%;
  }
  #app .subject{
    width: 100%;
    padding: 0;
  }
  body {
    padding: calc(100vw - 100%);
  }
  @media screen and (min-width: 375px) {
    html {
      /*iPhone6的375px作为16px基准，414px正好18px大小，600 20px*/
      font-size: calc(100% + 2 * (100vw - 375px) / 39);
      font-size: calc(16px + 2 * (100vw - 375px) / 39);
    }
    #app .avatar {
      width: 5em;
      height: 5em;
    }
  }
  @media screen and (min-width: 414px) {
    html {
      /*414px-1000px每100像素宽字体增加1px(18px-22px)*/
      font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
      font-size: calc(18px + 4 * (100vw - 414px) / 586);
    }
  }
  @media screen and (min-width: 600px) {
    html {
      /*600px-1000px每100像素字体增加1px(20px-24px)*/
      font-size: calc(125% + 4 * (100vw - 600px) / 400);
      font-size: calc(20px + 4 * (100vw - 600px) / 400);
    }
    #app {
      flex-direction: row;
    }
    #app .info {
      width: 35%;
    }
    #app .subject {      
      width: 65%;
      padding-left: 1em;
    }
    #app .avatar {
      width: 5em;
      height: 5em;
    }
  }
  @media screen and (min-width: 1000px) {
    html {
      /*100px往后是每100像素0.5px增加*/
      font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
      font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
    }
    #app {
      width: 1000px;
    }
    #app .subject {
      width: 75%;
      padding: 1.5em 2em;
    }
    #app .avatar {
      width: 8em;
      height: 8em;
    }
  }
  @media screen and (min-width: 1200px) {
    #app {
      width: 1200px;
    }

  }
</style>
