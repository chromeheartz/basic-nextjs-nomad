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