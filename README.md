<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="./logo-small.svg" height="100" hight="200" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="./jest-js-icon.png" height="100" alt="Nest Logo" /></a>
</p>

## 설명

- NestJS에서 Jest를 이용한 Unit Test의 기본적인 사용방법 입니다.
- 공부를 하며 앞으로 테스트 코드를 아래와 같이 작성해야 되겠다 생각하였습니다.
- 앞으로 계속 코딩하며 경험을 쌓고 업데이트 해야겠습니다.

## 테스트 코드의 구성

- class 이름의 description block 생성
- 그 아래 method 이름의 description block 생성
- 설정이 나눠질 경우 method를 그룹화할 description block 생성

## 테스트 코드 작성

1. 메서드에서 어떤 의존성을 사용하는지 확인
   - 테스트 대상 메서드가 호출하는 외부 서비스, 함수, 라이브러리 등의 의존성을 식별
   - 메서드가 외부 모듈과 어떻게 상호작용하는지 이해하는지 중요
2. 메서드에서 사용된 의존성의 Mocking
   - 식별된 의존성을 모킹할 방법을 결정
     - jest.fn(): 단일 함수를 모킹할 때 사용
     - jest.mock(): 전체 모듈을 자동으로 모킹하고, 모듈의 모든 내보내기(export)를 자동으로 jest.fn()으로 대체할 때 사용
     - jest.spyOn(): 객체의 메서드를 모킹하면서, 해당 메서드의 호출을 감시할 때 사용
3. 테스트 환경을 구성하여 설정 부분 세팅
   - 변수 및 타입 설정: 테스트에 필요한 변수와 타입을 설정
   - 주로 beforeEach 사용하여 각 테스트가 실행되기 전에 필요한 초기 설정을 수행
   - 여기에는 모킹된 의존성의 주입, 테스트 대상 인스턴스의 생성 등이 포함
4. 실행 부분 세팅
   - 테스트 케이스의 실제 실행 부분을 세팅
   - 이는 테스트 대상 메서드를 호출하고 결과를 변수에 저장하는 과정을 포함
5. 검증 세팅
   - 테스트의 목적에 따라 인수, 결과값, 내부 로직을 기준으로 검증을 수행합니다.
   - expect와 같은 assertion을 사용하여 테스트 결과가 기대치와 일치하는지 확인
   - [외부링크](https://inpa.tistory.com/entry/JEST-%F0%9F%93%9A-jest-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC)
6. 테스트 후처리
   - 테스트 실행 후, 모킹된 객체나 함수를 초기 상태로 복원
   - jest.resetAllMocks(), jest.clearAllMocks(), jest.restoreAllMocks() 중 적절한 함수를 사용하여 테스트 간의 상태 격리를 보장
