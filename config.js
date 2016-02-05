/**
 * タスク設定ファイル
 */
var DEV = 'src/dev',
   PUBLIC = 'src/public';
var ASSETS = '/assets';

module.exports = {
   // 出力先ディレクトリ
   dist: PUBLIC + '/%type%',
   // gulpコマンドでデフォルトで監視するディレクトリ
   defaultPath: '',
   // CSSの設定
   style: {
      // node-sass(https://github.com/sass/node-sass#options)
      sass: {
         outputStyle: 'expanded'
      },
      // autoPrefixer(https://github.com/postcss/autoprefixer#options)
      autoprefixer: {
         browsers: ['last 3 version', 'ie >= 9', 'Android 4.0'],
         ignore: []
      }
   },
   sprite: {
      // スプライトにする画像の拡張子
      extension: '.png',
      // 生成するスプライトの拡張子
      imgExtension: '.png',
      // 生成するcssファイルの拡張子
      cssExtension: '.scss',
      // 細かいオプション
      options: {
         // 生成するcssのテンプレート
         cssTemplate: 'src/templates/sprite.ejs',
         // スプライト配置アルゴリズム
         algorithm: 'binary-tree',
         // スプライト画像の間隔
         padding: 6,
         // 出力cssの詳細オプション
         cssOpts: {
            // スプライト生成用のmixinは書き出さない
            functions: false
         }
      }
   },
   // サーバー設定 BrowserSync(http://www.browsersync.io/docs/options/)
   server: {
      // サーバーの同期オプション
      ghostMode: {
         clicks: false,
         location: false,
         forms: false,
         scroll: false
      }
   },
   // スタイルガイド
   styleguide: {
      out: 'src/styleguide/%type%/'
   },
   // パス設定
   path: {
      // スタイル関連: SASS
      style: {
         src: [DEV + '/%type%' + ASSETS + '/sass/**/*.scss', '!' + DEV + '/%type%' + ASSETS + '/sass/**/_*.scss'],
         watch: [DEV + '/%type%' + ASSETS + '/sass/**/*.scss'],
         dest: PUBLIC + '/%type%' + ASSETS + '/css'
      },
      // EJS: ejs
      ejs: {
         src: [DEV + '/%type%/view/**/*.ejs', '!' + DEV + '/%type%/view/**/_*.ejs'],
         watch: [DEV + '/%type%/view/**/*.ejs'],
         dest: PUBLIC + '/%type%'
      },
      // スプライト: スプライト画像生成
      sprite: {
         src: DEV + '/%type%' + ASSETS + '/sprites/*',
         watch: DEV + '/%type%' + ASSETS + '/sprites/**/*',
         imagePath: '../img',
         imageDest: PUBLIC + '/%type%' + ASSETS + '/img',
         cssDest: DEV + '/%type%' + ASSETS + '/sass/sprites'
      },
      // スクリプト: script
      js: {
         src: [DEV + '/%type%' + ASSETS + '/js/*.js', '!' + DEV + '/%type%' + ASSETS + '/js/_*.js'],
         dest: PUBLIC + '/%type%' + ASSETS + '/js'
      },
      coffee: {
         src: [DEV + '/%type%' + ASSETS + '/js/*.coffee', '!' + DEV + '/%type%' + ASSETS + '/js/_*.coffee'],
         dest: PUBLIC + '/%type%' + ASSETS + '/js'
      },
      // images
      images: {
         src: [DEV + '/%type%' + ASSETS + '/img/**/*.+(jpg|jpeg|png|gif|svg)'],
         dest: PUBLIC + '/%type%' + ASSETS + '/img'
      },
      // 複製: copy
      copy: [{
         from: DEV + '/%type%' + ASSETS + '/lib/**/*',
         to: PUBLIC + '/%type%' + ASSETS + '/lib'
      }, {
         from: DEV + '/%type%' + ASSETS + '/font/**/*',
         to: PUBLIC + '/%type%' + ASSETS + '/font'
      }, {
         from: DEV + '/%type%' + ASSETS + '/video/**/*',
         to: PUBLIC + '/%type%' + ASSETS + '/video'
      }]
   }
};