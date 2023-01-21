## 요구사항

### HOME page

- [x] HOME화면에서 검색창을 볼 수 있다
- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 검색된 Repository들에 대해서 볼 수 있다
- [x] 검색된 Public Repository를 등록할 수 있다.
  - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 스낵브를 활용해 사용자에게 알려준다.
  - [x] LocalStorage를 활용하여 등록한 repository에 대한 내용들을 저장한다
- [x] Repository의 이름과 설명 부분을 클릭하면, 새 탭을 열어 Repository의 창을 보여준다

### Repository Page

- [ ] 등록된 각각의 public repository에 대해서 볼 수 있다
- [ ] 등록된 Repository를 삭제할 수 있다.

### Issue Page

- [ ] public repository를 클릭하면 issue들을 볼 수 있다
- [ ] Issue Item들을 보여준다
  - [ ] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - [x] 각 issue 마다 제목, Repository 명이 보이도록 한다.
  - [ ] 해당 issue를 클릭하면 새 탭으로 Github의 상세 페이지로 이동할 수 있다.
  - [ ] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

### 유의점

- github의 repository가 최대 1000개 까지 검색이 가능합니다 \*아래는 1000개 범위를 넘어가는 것을 조회했을 때에 나오는 결과

```
documentation_url : "https://docs.github.com/v3/search/"
message: "Only the first 1000 search results are available"
```

- 시간당 60회의 요청만 보낼 수 있음
