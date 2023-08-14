# webpack + typscript setup
- 나중에 사용하기 위해서 만듬  
  
## 기본 설정
- 타입스크립트 글로벌 설치: npm install -g typescript

- tscconfig.json 파일 생성 및 작성: tsc --init
- [typscript option docs](https://www.typescriptlang.org/tsconfig) 

- package.json 파일 생성 및 작성: npm init -y
- webpack 설치: npm install webpack webpack-cli ts-loader -D
- typescript 설치: npm install typescript -D
- webpack.config.js 파일 생성 및 작성
- [webpack config docs](https://webpack.js.org/configuration/)

- src 폴더 생성 및 index.ts 파일 생성
- public 폴더 생성 및 index.html 파일 생성 및 작성
- package.json scripts 부분 build 추가
- npm run build 실행
  

## 웹팩 개발 서버
- npm install webpack-dev-server
- package.json scripts 부분 dev 추가
- webpack.config.js 파일 devServer 옵션 추가
- npm run dev 실행
  
## ES6 모듈 방식 사용하기
- webpack.config.js resolve.extensions 옵션 추가
  
## map 파일 생성하기
- 빌드 전 오류난 파일 및 라인을 확인하기 위해서 사용
- tsconfig.json에서 sourceMap: true 추가
- webpack.config.js devtool: 'eval-source-map' 추가
- 오류를 일으켜보면 어디에서 에러가 났는지 알려준다.
  
## HtmlWebpackPlugin
- npm install html-webpack-plugin -D
- plugins 옵션 추가
- outputs 위치를 수정해 주자 public에서 dist로 수정
- build를 해보면 html 파일도 함께 생성이 된다.
- index.html 파일에 따로 js 파일을 추가하지 않아도 웹팩에서 추가
  
## css-loader, style-loader
- npm install css-loader style-loader -D
- rules 부분에 css 옵션 추가
- index.html 파일에 따로 css 파일을 추가하지 않아도 웹팩에서 추가
- 단 이방식은 html파일에 style 태그를 생성해서 스타일을 추가한다.
  
## css 파일을 불러오는 방식
- npm install mini-css-extract-plugin -D
- 실행시켜보면 main.css라는 파일로 생성되어 있음
  
## 이미지 로더
- npm install file-loader -D
- webpack.config.js 파일에 file-loader 룰 추가
- 실행해보면 typescript에서 에러를 발생시킨다.
- import 파일에 대한 type이 없기 때문이다. 따라서 읽어오는 이미지 파일에 대한 type을 정의
- 먼저 tscconfig.json 파일에 typeRoots 부분 작성
```json
"compoiler": {
    ...생략,
    "typeRoots": ["./node_modules/@types", "./src/@types"]
},
```
- 그다음 src/@types 폴더 생성 후 이미지 확장자에 대한 images.d.ts 파일 작성
```ts
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
```
- 다시 실행시켜보면 에러가 발생하지 않는다.
  
## 이외 여러 html 파일을 사용하기
   