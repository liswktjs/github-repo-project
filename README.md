## 요구사항

### HOME page

- [x] HOME화면에서 검색창을 볼 수 있다
- [x] 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
- [x] 검색된 Repository들에 대해서 볼 수 있다
- [x] 검색된 Public Repository를 등록할 수 있다.
  - [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 스낵브를 활용해 사용자에게 알려준다.
  - [x] LocalStorage를 활용하여 등록한 repository에 대한 내용들을 저장한다
- [x] Repository의 이름과 설명 부분을 클릭하면, 새 탭을 열어 Repository의 창을 보여준다

### All Issues Page (등록된 모든 레포지터리의 이슈들을 랜덤하게 보여주기)

- [x] Issue Item들을 보여준다

  - [x] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
  - [x] 각 issue 마다 제목, Repository 명이 보이도록 한다.
  - [x] 해당 issue를 클릭하면 새 탭으로 Github의 상세 페이지로 이동할 수 있다.
  - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

- [x] Promise all을 활용하여 repository에 등록된 값들을 모두 불러와 값을 섞어 랜덤하게 보여준다
- [x] repository가 localstorage상에 저장되어 있지 않은 경우 all-issues페이지로의 이동을 막는다
- [x] 만일 등록된 이슈가 없다면 없다는 안내메세지를 보여준다

### Issue Page (각각의 레포마다 이슈 보여주기)

- [x] 등록된 각각의 public repository에 대해서 볼 수 있다
- [x] 등록된 Repository를 삭제할 수 있다.

- [x] public repository를 클릭하면 issue들을 볼 수 있다
- [x] Issue Item들을 보여준다
  - [x] 각 issue 마다 제목, Repository 명이 보이도록 한다.
  - [x] 해당 issue를 클릭하면 새 탭으로 Github의 상세 페이지로 이동할 수 있다.
  - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

### issue api 관련 문제

#### /repos/{owner}/{repo}/issues

- 해당 api의 경우, total_count에 대한 응답값을 주지 않는다
- Issue를 조회할 경우, pr과 함께 조회된다
- pr일 경우 pull_request 의 속성이 존재한다

#### /search/issues

- 해당 api의 경우, totalCount 값을 제공해주지만, repository에만 속한 issue가 정확히 조회되지 않는다
  - q에 들어가는 단어와 유사한 경우에도 issue로 검색 결과를 돌려주기 때문에, total_count가 실제 해당 repository의 issue 총 개수과 일치하지 않는다

=> 결론

- repo에 속한 issue들을 정확하게 볼 수 있는 것이 중요하다고 판단하였습니다
  그래서, /repos/{owner}/{repo}/issues 를 사용하여 이슈를 조회하기로 하였습니다

  - PR의 경우,

    - PR인 것을 모두 제외하면 page 조회마다 유저에게 보여지는 item의 개수가 랜덤하게 보여져 혼란을 일으킬 수 있다고 고려하여, PR인 경우 PR로 표시하기로 결정하였습니다

  - Pagination의 경우,

    - Repository에서의 Pagination과 달리 처음 부터 완성된 totalCount를 주는 것이 아닌 다음 버튼을 눌렀을 때마다, 응답값으로 오는 값의 개수를 아래의 기준으로 판단해 숫자를 업데이트 해나갑니다
      - 현재의 응답값의 이슈 개수가 10개일 때에 다음 페이지가 있는 것으로 임의로 판단하여 Pagination상에 보여지는 totalCount의 숫자를 더합니다

### 유의점

- github의 repository가 최대 1000개 까지 검색이 가능합니다 \*아래는 1000개 범위를 넘어가는 것을 조회했을 때에 나오는 결과

```
documentation_url : "https://docs.github.com/v3/search/"
message: "Only the first 1000 search results are available"
```

- 시간당 60회의 요청만 보낼 수 있음
