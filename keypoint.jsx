/*
  # 1.0 Library vs Framework

  pages 에 index.js를 만들어
  export default function home() {
    return "hi";
  }
  넣어보면 자동적으로 home component가 보이고있다.

  ** 이것이 framework와 library의 핵심적인 차이점이다

  ** Library
  개발자로서 내가 사용하는 것. library를 불러와서 사용하고
  무언가를 한다 내가 원하는대로 코드를 작성할 수 있고
  사용하고싶을때 사용할 수 있다. react를 예로 들어보면
  내가 언제 react를 부를지, 폴더 구조 등등을
  많은 자유도를 가지고 작업 할 수 있다

  ** framework
  이것은 내 코드를 불러오는것이다. 만약 내가 적절한 위치에 잘 적기만 한다면
  framework는 내 코드를 불러와서 모든것을 작동시켜줄것이다
  next.js에서는 특정한 규칙을 따라서해야한다.
  정리하자면 framework는 코드를 어떤곳에 넣으면 framework가 그
  코드를 부르는 형태이다
  
  react와 nextjs의 제일 큰 차이점은 ReactDOM.render가 없다
  nextjs에서는 커스텀할 것이 없고 pages에서 무언가를 만드는것밖에
  하지 못한다

*/

/*
  #1.1 Pages

  component를 export하고 있는 파일을 pages폴더 안에 두면
  next.js가 파일의 이름을 가져다가 url의 이름으로 쓴다.
  
  * 파일의 이름이 중요하다
  그 이름 그대로 url으로 들어가게 되는것.
  하지만 component의 이름은 중요하지않음
  * 중요한것은 default로 export하는것 

  * 404 not found
  pages에 없는것들을 들어가게 되면 자동적으로
  404페이지가 나오게 된다. 커스텀도 가능

  ** pages에 넣을수 있는 몇가지 예외사항
  - index
  index는 앱의 홈페이지로 연결시켜주는데 그냥 / (슬래시)로만 표현

  - jsx
  jsx를 쓰고있다면 React.js를 import할 필요가 없다 
  파일명이 jsx가 될필요도 없다. 
  하지만 useState, useEffect와 같은 React method를 쓰고싶다면
  import를 해주어야한다
*/

/*
  #1.2 Static pre rendering

  next.js의 가장 좋은 기능 중 하나는, 앱에 있는 페이지들이
  '미리' 렌더링 된다는것이다. 이것들은 정적(static)으로 생성됨

  * noscript
  noscript는 자바스크립트가 활성화되지 않았을때 실행될 코드이다

  create-react-app과의 차이점
  
  ******** client side rendering(CSR) ********
  * create-react-app은 client-side-render를 하는 앱을 만든다.
  client-side rendering은 나의 브라우저가 유저가 보는 UI를 만드는 모든것을
  한다는것이다. 이것은 유저가 보는 HTML소스코드에 들어가 있지않다
  브라우저가 react.js를 다운받고 코드를 다운받았을때 그때에
  다른 모든것들을 렌더링하는것이다
  ** 브라우저가 자바스크립트를 가져와서
  client-side의 자바스크립트가 모든 UI를 만드는것

  * 네트워크에서 throtling에서 slow 3g로
  아주 느린 연결을 시도해보면 새로고침을 하면 흰화면만 나오게된다.
  이 순간에서 브라우저는 자바스크립트코드를 요청하고 있는것

  CSR은 브라우저가 HTML을 가져올때 '비어있는' div로 가져온다는것을 의미한다
  그 후에 브라우저가 모든 자바스크립트를 요청해서 javascript, react를 실행시키고
  모든것을 fetch하고 나서야 UI가 보여지는것

  ******** server side rendering(SSR) ********

  next.js에서 똑같이 자바스크립트를 활성화시키지 않고 새로고침을 해보아도
  화면에 달라짐은없다. 차이는 소스코드에 있는데
  next.js의 소스코드를 보면 실제 HTML이 들어있다
  그래서 매우 느린 연결을 하고있거나 자바스크립트가 비활성화 되어있어도
  적어도 유저는 HTML을 볼수는 있다.

  나의 페이지는 미리 렌더링(pre-rendering) 되는것이다
  그래서 유저가 요청하면 진짜 HTML을 얻게 되는것

  ******** Hydration ********

  예시를 보기위해 counter를 만들어볼것이다
  앱의 초기상태를 활용해서 미리 렌더링해서 가져왔다 (pre-rendering)
  next.js는 초기상태로 pre-rendering을 하는것

  count가 0이기에 HTML도 count에 0의값을 갖는 초기상태로 가져옴
  처음에 이 페이지가 로딩될때 많은 스크립트를 요청한다.
  좋은 점은, 페이지가 로딩되었을때 react.js가 넘겨받아서 완벽하게 동작한다
  지금 보이는것처럼, 페이지를 딱 열면 보게되는것이 HTML인데, react.js가
  (클라이언트로) 전송되었을때, 이것이 react.js 앱이 되는것이다

  ** react.js를 프론트엔드 안에서 실행하는 이런것을 Hydration이라고 한다
  왜냐하면 next.js는 react.js를 백엔드에서 동작시켜서 이 페이지를 미리 만드는데
  이게 component들을 render시키고 렌더링이 끝났을때 그건 HTML이 되고
  next.js는 그 HTML을 페이지의 소스코드에 넣어주는것
  그럼 유저는 자바스크립트와 react.js가 로딩되지 않더라도 콘텐츠를 볼 수 있고,
  로딩 되었을때 기본적으로 이미 존재하는것들과 연결이 되어서
  일반적인 react.js 앱이 되는것이다

  **** 유저가 웹사이트로 가면 초기 상태의 component로 된 미리 생성된 HTML페이지를 보게되고
  상호작용이 일어나면 react.js는 그걸받아서 동작한다는것


*/

/*
  #1.3 Routing

  네비게이션 컴포넌트는 Next.js의 컨셉을 알수있게 해줄것이다
  그냥 a태그로 쓰면 es-lint에서 얘기를 할것이다
  a 태그를 home페이지로 이동하는데에 사용하지 말라고

  Next.js앱에서 anchor태그를 네비게이팅 하는데에 사용하면 안되는 이유는
  Next.js 앱 네에서 페이지를 네비게이트 할 때 사용하는
  특정 컴포넌트가 존재하기 때문이다
  react.js -> react router link랑 같은 이유

  페이지를 넘어간다면 새로고침 된다.
  그런것을 원하지 않는것이다. 클라이언트 사이드 네비게이션이 없다는 의미니까
  * 브라우저가 다른 페이지로 보내기 위해 전체페이지를 새로고침 한다는 뜻 *


  그래서 next.js에서는 Link 컴포넌트가 존재한다

  * Link 는 우리에게 next.js어플리케이션 클라이언트 사이드 네비게이션을
  제공해준다는것
  13버전부터는 조금 달라져서 Link안에 a가 있다면 legacyBehavior라는
  prop을 넣어주어야 오류가 나지 않음

  Link자체에 className이나 style을 전달해주어도 전달이 되지않기 때문에
  우리는 a를 사용하는것이다 Link는 단지 href만을 위한것

  **** Router와 연결할 수 있는 Hook

  useRouter훅을 사용하면된다
  const router = useRouter();
  console.log(router)
   
  콘솔으로 우리 location의 정보를 확인할 수 있다
  만약 About에 있는지 Home에 있는지 알고싶다면 anchor에 style으로 
  확인해볼것이다
  router.pathname === "/" ? true : false 로 active처럼 구현이 가능

*/

/*
  #1.4 CSS Modules

  inline방식으로 자바스크립트 오브젝트를 style로 넣어줄수 있지만
  modules을 활용할 수 있다

  컴포넌트이름.module.css를 만들고
  컴포넌트에서 이 파일을 자바스크립트 오브젝트로서 임포트 시킬것이다
  클래스이름에 우리가 임포트해온 오브젝트의 이름 .클래스이름
  형식으로 지정해주면된다

  이것이 작동하는 이유는 css모듈 패턴을 이용해서 그런것이다
  클래스이름을 텍스트로서 적지 않고 오브젝트에서의 프로퍼티 형식으로 넣는것이다
  * 이러한 접근방식의 장점은 실제 클래스이름은 다를것이다
  어떠한 무작위 텍스트가 될것
  이렇게 되면 '충돌'이 일어나지 않는다

  클래스이름을 중복에 대한 고민없이 사용할 수 있다는 것이 장점이다

  기존의 anchor에 조건문을 걸어주어 깔끔하게 구현했다

  * 두 클래스이름을 동일한 엘리먼트에 적용도 가능
  특정 문자열을 만들어서 삽입해야한다
  <a className={`${styles.link} ${
    router.pathname === "/" ? styles.active : null
  }`}>home</a>

  백틱으로 클래스이름과 조건부 삽입문을 같이 구현
  <a
    className={[
      styles.link,
      router.pathname === "/" ? styles.active : null,
    ].join("")}
  >
    home
  </a>

  한 클래스 이름과 다른 클래스 이름의 배열을 만들고 join을 써서
  공백을 간격으로 다른 한 문자열로 바꾸어 버리는 방법도 가능하다

  ** 하지만 이런방법은
  파일을 또 만들거나 조건부가길어지는 단점이 있기때문에
  다른 방법으로 구현해볼것이다.
  여기서 중요한것은 join을 써서 배열안의 2개의 아이템들을
  하나의 문자열로 이어주는 부분만 기억하면 좋을듯


*/

/*
    #1.5 styles jsx

    styled jsx는 어플리케이션에 styles를 추가하는 또 다른 방식이다
    styledjsx는 Next.js의 고유의 방식이다
    <style>이라는 태그에 jsx prop을 넣어주고
    중괄호와 백틱으로 감싸준다

    평범한 css로 써주고 확인을해보면 class명이 jsx로 들어가는것을 볼 수 있다
    이전 것들처럼 모듈들이 독립되어있는것을 볼 수 있다

    다른 컴포넌트에서 중복되는 클래스 이름이 있어도 styled jsx를 사용하기 떄문에
    스타일들은 컴포넌트 내부로 범위가 한정되는것

    ** vudqjagks answkdufdlrlEoansdp
    ${props.color}로 prop을 가져올수도있다

*/

/*
    #1.6 Custom App

    GLobal Styles을 추가하기 위해서 Next.js의 컨셉을 알아야한다
    App Component, App page

    현재 우리는 styled jsx가 컴포넌트에 scoped(한정되어 적용)된다는것을 알고있다
    현재 Home안에 NavBar컴포넌트가 있는데 Home에서 적용해주는 style은 NavBar에 연결되지 않는다
    컴포넌트 내로 적용이 되어있기 때문에. 

    Global Styles를 추가하는 방법은 global이라는 prop을 추가하면 된다
    현재를 기점으로 home으로 가면 a가 적용이 되지만 about으로 넘어가게되면 global 스타일이 적용되지 않는다

    그 이유는
    Next.js로 작업할때에 고려해야할 부분중 하나인 페이지를 고려하는것이다
    페이지'별'로 생각.
    about으로 갔을때 우리는 다른 페이지 안에 있기 때문에
    렌더링되고있는 컴포넌트 또한 다른것이다

    *** 말그대로 모든 페이지에 global style을 넣고싶다면
    이제 App Component를 얘기해야할것이다

    App Component는 일종의 어떤 컴포넌트의 blueprint이다
    next.js가 모든페이지를 렌더링 할 수 있게하는.
    이것을 커스터마이즈하려면 파일을 만들어야하는데
    _app.js 무조건 이 이름이여야한다

    모든페이지들이 렌더링되기전에 _app를 먼저 확인하고 렌더링한다
    _app.js에 넣어둔 blueprint를 기반으로
    ** 어떻게 페이지가 있어야하는지 어떤 어떤 컴포넌트가 어떤 페이지에 있어야만하는지

    그 안의 함수 이름을 원하는대로 적어주고
    prop을 리턴해줄것이다
    next.js는 _app.js를 자동적으로 불러낸다(프레임워크는 내 코드를 불러오는것)
    nxt.js는 이 함수를 부를것이다 두개의 prop과 함께
    하나는 Component, 하나는 pageProps이다. 이것은 정해져있음

    만약 about을 렌더링하길 원하면 next.js는 about을 가져다가 Component자리에 넣어줄것이다
    무엇을 리턴하던 페이지와함께 추가로 작성한것을 리턴해줄것이다
    return <Component {...pageProps} />

    ** next.js로 앱을 만들때에는 globals.css를 import할 수없다
    커스텀 App이외의 파일들로부터는 할 수 없다고나옴
    임포트하기를 원한다면 반드시 module 이어야만한다

    하지만 만약 커스텀 메ㅔzㅓㅁ포넌트가 있는곳에서라면 globals.css를 임포트하는것이 가능

*/

/*
  #1.7 Recap

  Rehydration
  next.js가 백엔드상에서 react.js를 돌리고 있고
  next.js가 페이지를 pre-grenerate(사전생성)할것이고 그것은 HTML페이지가 된다
  유저가 그 웹사이트에 들어갈때 HTML을 보게된다
  백지화면이라든가 로딩스테이지는 볼 수 없다

  유저가 모든 자바스크립트를 다운로드하면 react.js가 주도권을 가져와서 
  일반적으로 동작하는것

  ** next.js는 페이지들을 사전생성한다 
*/

/*
  #2.0 Patterns

  많은 사람들이 흔하게 이용하는 패턴을 사용할것이다
  custom app component를 사용해서 layout 패턴을 만들것
  NavBar 옆에 div를 만들어서
  children을 넣어볼것이다

  children은 react.js가 제공하는 prop
  하나의 component안에 다른 component를 넣을 때에 사용한다

  children이란 _app에서
  <Component {...pageProps} />
  이부분을 말하는것이 된다

  _app에서 footer나 뭐든 넣게되면
  layout에서 children으로 받아와서 보여지게 되는것이다

  ** 패키지

  import Head from "next/head";
  app의 head부분을 구현하기 위해 nextjs에서 제공하는 패키지를 임포트
  create-react-app이였다면 react-helmet같은것을 가져와야한다

  그 말은 별개인 새로운 컴포넌트 , 오류가 생기기 쉽다는것인데
  next js의 경우는 제공을 하기 때문에 좀 더 발생률이 적다

  현재 Head의 title을 Home과 About 다르게 바꾸어주었는데
  복붙해서 다시 쓰고싶지 않으니 다른 방법을 찾아본다

  컴포넌트안에 Seo.js를 만들어서 관리
*/

/*
  #2.1 Fetching Data

  next.js를 이용하면 public파일들을 쉽게 다룰 수 있다
  public디렉토리에 파일들을 넣기만 하면 된다

  /public/...할 필요 없이 절대경로가 맞추어져있다

  img src 를 하고 보면
  img태그가아닌 Image라는 nextjs에서 지원하는 것을 사용하라고 나온다
  하지만 image component는 로컬,원격 이미지에서 복잡해질수도있으니 지금은 미사용

  ()() 를 작성하는 부분이 궁금해서 찾아봤는데, 
  IIFE (즉시 실행 함수 표현, Immediately Invoked Function Expression) 
  이라고 찾았습니다. 
  첫번째 괄호는 익명함수를 감싸 실행 될 함수가 전역 스코프에 불필요한 변수를 추가하거나,
  IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이라고 설명되어 있습니다.
  두번째 괄호는 즉시 실행 함수를 생상하는 괄호이고,
  이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다고 설명되어 있습니다.


*/

/*
  #2.2 Redirect and Rewrite

  poster_path같은것이 있는데 이것은 API가 가진 정보에 있다
  전체 URL은 아님. 먼저 movie DB에서 image서버같은 ㅕ끼을 써서 요청하면
  response에 들어오게됨

  ***** Nextjs를 이용해서 API Keys 숨기기

  사람들이 키를 알면 남용할수있꼬 다른사람이 사용하면
  사용에 제한이 있을수 있으니 숨겨볼것이다

  네트워크쪽으로보면 우리가 request한 URL이 보일것이다
  그쪽에 보면 API KEY가 보이고있는데 그것을 숨겨볼것이다

  ****** redirect & rewrite

  request에 mask를 씌우는것 같은 redirect와 rewrite를 해볼것이다

  next.js configuration파일을 열어서 설정해보자

  *** redirect ***

  API Key를 숨기지 않는 redirect가 있다

  next.js가 redirection을 허용한다
  서버가 실행되고 clent랑 server가 있다
  원한다면 항상 쓰는것처럼 redirect가 가능하다

  async redirects함수를 만든다(array를 return해줌)
  이 array는 obj를 가질것이다
  1- source 를 찾는다 (유저가 어디론가 이동한다면)
  2- destination(어디론가 이동할 위치)
  3- permanent(영구적) 이 redirection이 영구적인지 아닌지에 따라서
  브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정된다

  우리의 website이내에서든 바깥으로든 redirect할 수 있다
  source: "/old-blog/:id",
  destination: "/new-blog/:id",
  만약 이 두개 뒤에 *를 넣어주면 그 뒤에들어가는 모든것을 catch해서
  redirect해준다

  *** rewrites ***

  rewrites은 유저를 redirect시키기는 하지만
  URL은 변하지 않는다

  예를들어 index에서 fetch를 할때 API_KEY를 숨기고싶다
  api키를 가져와서 config에서 선언해주고
  destination을 fetch할 주소를 넣어놓는다

  그렇게 되면 
  redirect와 비슷한데 유저가 URL변화를 보지 못한다
  즉, API키를 보지 못하는것

  fetch함수를 /api/movies로 하게 되면 잘 작동된다
  fetch를 하는데 next.js가 이 request를 masking하는것이다

  localhost:3000/api/movies 로 들어가보면
  우리가 fetch를 했을때 얻을 정보들이 뜨는데
  우리 서버 뒤에 mask되어있다

  env로 한번 더 숨겨주어도 좋다
  이렇게 하면 가짜 fetching URL을 가지게 된다


*/

/*
  #2.3 Server Side Rendering

  nextjs의 function인데 이것은 우리에게 선택권을 준다
  우리 페이지가 오직 'server side render'만 할지 

  현재 우리가 reload를 하면
  nextjs가 이 page를 html형태로 export하던지
  pre render하는것을 알고있따

  우리는 html이 우리 app의 초기 상태인것도 안다
  그러니까 loading같은것도 기대할 수 있다

  현재는 로딩이 보이게 된느데 그게 싫을수 있다
  *** 예를들어 fetch라던지 server에서 일어나는 data관련된 작업을
  모두 한 다음에 API가 완료되었을 때 비로소 페이지를 render하려고 할것이다

  ***** get server side props
  간단히 getServerSideProps를 xport해주면 된다
  이름은 다른것으로 바꾸면 안된다

  이 자리에 어떤 코드를 쓰던지 간에 그 코드는 server에서 돌아간다
  client가 아님

  이것을 이용해서 API키를 숨기기도 가능
  여기에 API KEY를 쓰면 절대 client에게 보이지 않는다
  서버에서만 실행되기 때문에

  이 안에 모든 async를 넣고 
  object를 하나 return할것인데
  props라는 key를 가지고 있고 우리는 결과를 그 안에 넣을것이다

  지금 한것은 getServerSideProps라는 function을 만든것
  props안에는 원하는 데이터를 넣을수있다

  이 데이터는 어디서 가져올까 Home({results})로 받아주면된다

  ***** 
  getServerSideProps는 server에서 실행되고
  우리가 무엇을 return하던지 props로써 page에 주게 된다

  이제 원한다면 server side를 통해 props를 page로 보낼수있다
  그래서 _app에서 pageProps가 필요한것이다

  fetch할때에 그냥 /api/movie하면 에러가 나는데
  absolute URL에서만 지원된다고 하는데
  api/movies는 프론트에서 작동하고 서버에서는 작동하지 않기때문에
  프론트에는 이미 브라우저 URL이 있어서 그것을 넣어주면된다

  ***** 이제 선택을 할때에 잘 정해야함

  항상 server side rendering을 할것인가
  즉, 데이터가 유효할때 화면이 보여지게 되는것이 좋은지

  loading화면을 보여준 다음에 데이터를 받는것이 좋은지

  *** 
  어느 시점에 react.js가 프론트의 주도권을 가져올것이다(클라이언트 사이드에서)
  next.js가 props의 data를 주고 있다
  모든 props movies들이 보이고 이것은 백엔드에서 받아왔다

  여기서 next.js의 역할은 백엔드에서 받아온 data를 return해서 NEXT_DATA쪽에
  보내주면 reactjs가 props를 가져와서 그것을 가지고 result array를 뽑아주는것이다

*/

/*
  #2.5 Dynamic Route

  현재는 Home과 About만 있는데
  이제 우리가 할것은 URL에 변수를 넣는것이다
  (영화로 치면 상세페이지로 넘어가도록)

  /movies/:id 처럼 하는 create-react-app과는 다르다
  nextjs에는 router가 없기 때문

  * 폴더랑 파일의 이름만을 가지고 해볼것이다

  전체를 보여주고싶다면 movies폴더에 all을 만들어볼것이다 이것은
  movies/all URL으로 들어오면 보일것이다

  만약 /movies 라고 하고싶다면 새로운 파일을 만들겠지만

  movies > index.js || all.js
  이런식으로 하게되면 index는 
  /movies에 매핑될것이고 
  /movies/all에는 all.js가 매핑될것이다

  Nested Router(중첩라우터)같은것이다

  우리가 할것은 폴더를 만들어서 파일만 만들어주면된다
  페이지가 하나라면 폴더를 만들어주지 않아도 된다

  about처럼.

  우리는 이제 영화의 id를 넘겨받고싶다

  ** next js에게 이 URL은 변수가 필요하다고 알려줄수있는 방법

  파일을 하나 만들고 대괄호안에다가 우리가 사용하고자하는
  변수명을 적어주면된다
  이렇게하면 페이지가 만들어지는데
  유저가 /movies/11111121이렇게 했을때 나오는 페이지가 되는것이다
  이게 URL에 변수를 넣는 방법이다
  Dynamic URL

  router를 콘솔로 찍어보았는데
  query라는 것이 있고 그 property에 들어있는 객체의
  키는 파일명에 쓰인 변수명과 동일하다

*/

/*
  #2.6 Movie Detail

  Link태그로 mapping하던 곳을 감싸주어
  클릭했을떄 movie.id값으로 상세페이지로 이동하도록 구현했다

  현재같은경우 a 안에 div를 넣었지만
  그것은 html스펙에 맞지 않을 수 있다
  a 태그는 텍스트를 감싸고있어야한다

  a태그를 h4안에 감싸주었는데 전체를 클릭했을때 보내주고싶다

  **** router hook

  navigating하는 다른 방법을 활용
  useRouter를 불러와서 onClick이 이루어졌을때 id를 매개변수로 던지고
  그 id에 맞게 movies의 상세페이지로 이동

  이것이 navigating하는 2가지 방법이다
  Link로 하는 방식이랑
  예를들어 유저가 form을 제출하게되면 코드를 통해 자동으로 
  유저를 navigating해주는것

  이제 해야하는건 API에 rewrite를 하나 더 만드는것
  상세페이지에서 받아올것의 조건에 맞추어서 해준다
  source에 :id를 적었다면
  destination에도 :id로 변수명을 맞추어준다

  ****

  상세페이지에 있는 그 하나의 대한 데이터는 이미 React.js데이터로 가지고있는데
  URL에서 URL으로 state를 넘겨주어볼것이다

  그리고 그것을 유저로부터 숨기는 방법또한

  push를 할때에 우리는 선택할 수 있다
  URL을 string으로 보낼수도있지만 객체로도 보낼수있다
  마우스를 올려보면 as?가 있는데 이것은 필수는 아니지만 사용하면 브라우저의 URL을 마스킹할것이다

  const onClick = (id) => {
    router.push({
      pathname: `/movies/${id}`,
      query : {
        id,
        title : "potato"
      },
      `movies/${id}` // url을 숨겨줄곳
    })
  }

  이렇게 하고 클릭을 해보면
  영화에 대한 정보를 담고있는 query를 확인할 수 있다
  많은 사람들이 URL에 query string이 보이는것을 원하지 않을것이다
  이럴때에는
  * 두번째 옵션인 as로 숨겨줄것이다

  ,를 해주고 브라우저에 보일 URL을 써주면 된다

  그러나 router를 보면 우리가 담아준 데이터를 확인할 수 있다
  query쪽에 우리가 담아준 title이 들어갈것이다

  ** 문제는 홈페이지를 거치지않고 상세페이지로 넘어갈때 존재한다
  ** LINK에서도 똑같이 구현해줄수있다

  <Link
    href={{
      pathname: `/movies/${movie.id}`,
      query: {
        title: movie.original_title,
      },
    }}
    as={`movies/${movie.id}`}
    legacyBehavior
  >


*/

/*
  #2.7 Catch All

  catch-all URL이라는 것을 만들어볼것이다
  무엇이든 캐치해내는 URL이라느 뜻이다

  SEO에 좋도록 영화이미지를 넣어볼것이다

  [id].js를 [...id].js로 만들게되면
  영화이름이 id앞에 들어가도 상세페이지로 접근이 가능해진다
  router를 찍어보면
  query에 id가 string이 아닌 
  배열으로 들어가있게 된다

  기존에 상세 페이지로 넘어가는 두군데의 동작을
  ${title}/${id}로 바꾸어주면 상세페이지에서 
  ES6문법을 활용해 쓸수있다

  const [title, id] = router.query.params;
  우리는 params가 2개의 element를 가지는 배열이라는것을 알기때문에 
  이런식으로 풀어준다

  하지만 이제 새로고침을 하거나 시크릿모드로
  home을 거치지 않고 들어오게되면

  ** TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator)) **
  이런오류가 나오는데
  이 페이지가 백엔드에서 pre-render되기 떄문이다
  server에서 미리 렌더링 되는데 server에는 router.query.params가 아직 존재하지 않음
  || [] 를 넣어줘서 에러를 해결할 수 있지만 그렇게되면
  소스코드에는 title이 안나오게 된다 이유는
  client side rendering을 하기 떄문

  원한다면 getserverSideProps를 사용해서 할수도있다 
  그럼 request에 대한 정보나 영화 제목을 가질수있을것이다

  *** nextjs가 server-side context를 제공해준다
  매개변수에 ctx를 넣어놓고 콘솔에 찍어보면
  params가 server에 들어있는것을 알 수 있다.

  ctx 안에 이런구조로 있기때문에
  params: { params: [ 'Black Panther: Wakanda Forever', '505642' ] },
  비구조화 할당으로
  {params : { params }}로 가져온다
  return 객체에 props로 넣어주고 받아와서

  const [title, id] = params || []; 이렇게 바꾸어주면된다
  이렇게하면 백엔드에서 가져온 데이터를 확인할 수 있다

  컴포넌트내부에서 router를 사용하면 front에서만 실행이 되는데 (클라이언트 사이드에서만 실행)
  지금은 API데이터에서 fetch해오지 않고 getServerSidePRops에서
  URL정보를 가져왔다
  

*/