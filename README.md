# bae_j_miniApp

<snippet>
  <content><![CDATA[
# ${1:Mini APP}

Aim: Building one-page mini car app with SASS, Vue, AJAX, databases and Fetch.<br>
We navigate content and data in mini app using Vue lifecycle hooks, components, and AJAX.

## Installation

MAMP (https://www.mamp.info/en/mamp/mac/) <br>
SASS (https://sass-lang.com/install) <br>
Vue (https://vuejs.org/v2/guide/)

## Plan for MINI APP

AJAX(Asynchronous Javascript and XML) is a front-end technique for interactive web applications. AJAX is used with XML, HTML, CSS, and javascript. <br>
PHP is a general-purpose scripting language especially suited to web development. <br>
Vue is a progressive framework for building user interfaces.
<br><br>
In this project, we create powerful mini app using PHP and connect the database to js with vue so we do not need to add more data in js. We can just add data in PHP without codes when we add contents, and it shows on our website. <br>
With this functions, I used SASS modules for better CSS. Also, event delegation with AJAX. <br>
When I create a database in PHP, I used 2 columns which are name and avatar. There are 4 different mini cars in data. After putting database in PHP, if I check the vue in inspect, I can literally check the CarCard in root. With Vue, I just used for car datas with h and p messages to introduce car events.<br><br>
error issues => I have got an issue with my js for plusslides with images because it was not defined so I moved to in index file and it worked. 

## Path for MINI APP

1. Create basic structure of HTML
2. Add a json file --> data of mini cars
3. Create fetch data and error codes in js
4. Build a database in PHP
5. Create includes files to connect PHP data
6. Check insect if everything working and TA-da!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits

Dart Sass (1.27.0) <br>
Virtualstudio (1.50)

## License

MIT License

Copyright (c) 2020 Jiyun Bae

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>