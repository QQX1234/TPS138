$(function () {
    $('img').each(function () {
        // $(this)表示当前的img元素
        // #获取当前图片路径 src属性
        var img_path = $(this).attr('src')
        // 若图片在上一级目录:img_path += '../' + img_path
        // console.log(img_path)
        // #字符串拼接
        img_path = "{% static '" + img_path + "' %}"
        // console.log(img_path)
        // #设置对应元素的src属性
        $(this).attr('src',img_path)
    })
    // #输出body >> 复制 >> 替换掉原有的body内容 >>删除该脚本
    console.log($('body').html())
})

