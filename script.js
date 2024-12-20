// 定义轮播图的全局索引，用于跟踪当前显示的轮播项
let index = 0;

// 当文档加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有的轮播项
    const bannerItems = document.querySelectorAll('.banner-item');
    const totalItems = bannerItems.length;

    // 为每个轮播控制按钮绑定点击事件
    document.querySelectorAll('.banner-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // 根据按钮的类名判断是左移还是右移
            const direction = e.target.classList.contains('right') ? 1 : -1;
            changeSlide(direction);
        });
    });

    // 设置定时器，自动轮播图，每3秒切换一次
    setInterval(() => {
        changeSlide(1);
    }, 3000);

    // 随机选择音频文件并播放
    playRandomAudio();
});

// 切换轮播图的函数
function changeSlide(direction) {
    // 获取所有的轮播项
    const bannerItems = document.querySelectorAll('.banner-item');
    // 获取当前活动的轮播项
    const activeItem = document.querySelector('.active'); 
    // 移除当前活动的轮播项的active类
    bannerItems[index].classList.remove('active');
    // 更新索引，实现轮播图的切换
    index = (index + 1) % bannerItems.length;
    // 为新的轮播项添加active类
    bannerItems[index].classList.add('active');
}

// 随机播放音频函数
function playRandomAudio() {
    const audioElement = document.getElementById('dd');
    // 定义音频文件路径数组
    const audioFiles = [
        "./music/f4a1_34dd_ab8f_ea8496fd3eb5007e09a6e287357f4d30.mp3",
        "./music/obj_wo3DlMOGwrbDjj7DisKw_34022222448_5a93_0468_1c8c_69f35af60c627a82de004805f4b3e01d.mp3",
        "./music/life's a struggle 高音质歌词版.mp4",
        "./music/M500002BgdVc0vsILn.mp3",
        // 添加更多音频文件路径
    ];
    // 随机选择一个音频文件
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    audioElement.src = audioFiles[randomIndex];
    // 尝试播放音频，如果失败则在控制台输出错误信息
    audioElement.play().catch(error => console.log('播放音频失败:', error));
}

// 动画效果
const elements = document.querySelectorAll('.slide-in'); // 选择所有需要动画的元素
// 为每个元素设置延迟，实现顺序动画效果
elements.forEach((element, index) => {
    setTimeout(() => {
        element.classList.add('active'); // 添加active类来触发动画
    }, index * 100); // 每个元素延迟100ms
});

// 当文档加载完成时执行音乐播放器逻辑
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioTitle = document.getElementById('audioTitle');
    // 定义音乐文件路径数组
    const musicFiles = [
        "./music/BigPoppa.mp3",
        "./music/Ghetto Gospel.mp3",
        "./music/life's a struggle 高音质歌词版.mp4",
        "./music/Mockingbird.mp3",
        // 添加更多音乐文件路径
    ];
    // 定义音乐文件名称数组
    const musicNames = [
        "BigPoppa",
        "Ghetto Gospel",
        "life's a struggle",
        "Mockingbird",
        // 添加更多音乐文件名称
    ];

    // 随机选择音乐文件和名称
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    audioPlayer.src = musicFiles[randomIndex];
    audioTitle.textContent = `正在播放：${musicNames[randomIndex]}`;

    // 监听音乐播放事件，更新音乐名字
    audioPlayer.addEventListener('play', function() {
        audioTitle.textContent = `正在播放：${musicNames[randomIndex]}`;
    });

    // 监听音乐结束事件，播放下一首音乐
    audioPlayer.addEventListener('ended', function() {
        const newIndex = (randomIndex + 1) % musicFiles.length;
        audioPlayer.src = musicFiles[newIndex];
        audioTitle.textContent = `正在播放：${musicNames[newIndex]}`;
        audioPlayer.play();
    });

    // 播放随机选择的音乐
    audioPlayer.play();
});