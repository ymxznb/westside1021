// 监听DOM加载完成事件
// 当整个文档加载并解析完成后，会触发这个事件
document.addEventListener('DOMContentLoaded', function() {
  // 获取歌手图片列表元素
  // 使用document.querySelector选择页面中第一个具有'.image-singer'类的元素
  var imageSinger = document.querySelector('.image-singer');
  
  // 给歌手图片列表添加动画类
  // 通过添加名为'animated'的类，触发CSS中定义的相关动画效果
  // 这个类会改变元素的样式，通常是开始一个入场动画
  imageSinger.classList.add('animated');
});
document.addEventListener('DOMContentLoaded', function() {
  var imageSinger = document.querySelector('.image-singer');
  imageSinger.classList.add('animated');

  // 搜索歌手的函数
  function searchSinger() {
      var input = document.getElementById('singer-search').value.toLowerCase();
      var imageContainers = document.querySelectorAll('.image-container');

      // 根据输入过滤歌手列表，并重置之前的放大效果
      imageContainers.forEach(function(container) {
          container.classList.remove('enlarged'); // 移除之前的放大效果
          var overlay = container.querySelector('.overlay');
          if (overlay) {
              var name = overlay.textContent.toLowerCase();
              if (name.includes(input)) {
                  container.style.display = ""; // 显示匹配的歌手
                  container.classList.add('enlarged'); // 添加放大效果
              } else {
                  container.style.display = "none"; // 隐藏不匹配的歌手
              }
          }
      });
  }

  // 监听搜索按钮的点击事件
  document.querySelector('button').addEventListener('click', searchSinger);
});