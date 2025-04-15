const fs = require('fs');
const path = require('path');

const pages = [
    { name: 'home', title: 'Home Feed', category: 'jk' },
    { name: 'explore', title: 'Explore', category: 'jk' },
    { name: 'create', title: 'Create Post', category: 'jk' },
    { name: 'notifications', title: 'Notifications', category: 'jk' },
    { name: 'profile', title: 'Profile', category: 'jk' },
    { name: 'settings', title: 'Settings', category: 'jk' },
    { name: 'car/home', title: '驾考首页', category: 'car' },
    { name: 'car/learn', title: '章节学习', category: 'car' },
    { name: 'car/exam', title: '模拟考试', category: 'car' },
    { name: 'car/drive', title: '驾驶实战', category: 'car' },
    { name: 'car/profile', title: '个人中心', category: 'car' },
    { name: 'car/wrong', title: '错题本', category: 'car' }
];

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}} - JK App</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background-color: #f0f2f5;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        .phone-frame {
            width: 375px;
            height: 812px;
            background-color: white;
            border-radius: 40px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            position: relative;
            border: 10px solid #000;
            margin: 0 auto;
        }
        .screen {
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 30px;
        }
        .screen iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <div class="fixed top-4 right-4 z-50">
        <a href="../index.html" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            <i class="fas fa-arrow-left"></i> 返回导航
        </a>
    </div>
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold text-center my-8">{{title}}</h1>
        <div class="phone-frame">
            <div class="screen">
                <iframe src="../app/pages/{{name}}.html"></iframe>
            </div>
        </div>
    </div>
</body>
</html>`;

// 确保pages目录存在
if (!fs.existsSync('pages')) {
    fs.mkdirSync('pages');
}

// 确保car目录存在
if (!fs.existsSync('pages/car')) {
    fs.mkdirSync('pages/car');
}

// 为每个页面生成HTML文件
pages.forEach(page => {
    const content = template
        .replace(/{{title}}/g, page.title)
        .replace(/{{name}}/g, page.name);

    const filePath = path.join('pages', `${page.name}.html`);
    fs.writeFileSync(filePath, content);
    console.log(`Generated ${filePath}`);
}); 