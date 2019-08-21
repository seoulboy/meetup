# Frontend Test

## Meetup Portal

지금까지 학습한 내용(React/Redux 등)을 기반으로 Meetup Portal을 만드는 과제입니다. 프로젝트 Boilerplate는 [Create React App](https://create-react-app.dev)을 사용하시기를 추천드립니다.

React와 Redux는 필수적으로 사용하셔야 합니다. 그 외에는 기술적 제약이 없습니다. 동기들과의 토론 또한 자유롭게 나누어도 괜찮습니다만, 반드시 스스로 양심껏 작업해주시기 바랍니다. 또한 테스트 기간 동안에는 모두 집중하여 작업하는 시간이니 서로에 대한 배려에 더욱 신경써 주시기 바랍니다.

### Deadline

가장 마지막 Commit 시간을 기준으로 수요일 저녁 7시 마감입니다.

### Submission

본인만의 브랜치를 만들어 작업한 후, master 브랜치에 Merge Request를 만들어주세요. GIF 파일도 함께 추가해주세요.

### Grades

30점 이상 Pass입니다.

- (10) Feature Requirements
- (10) Consistent Code Style
- (10) Code Readability
- (10) Personal Improvements
- (10) Git Commit History

### Meetup API Key

- [How to generate your API Key](https://secure.meetup.com/meetup_api/key/)

### Meetup API Reference

- [Meetup Upcoming Events API](https://www.meetup.com/meetup_api/docs/find/upcoming_events/)

### Requirements

1. 지도가 화면에 표기되어야 합니다.
    - 지도의 초기 위치는 원하시는 장소로 설정하셔도 괜찮습니다.
    - 지도의 위치를 기준으로 10개의 Meetup Event를 나열해야 합니다.
2. 각각의 Meetup에 대하여 다음 정보들이 표기되어야 합니다.
    - 이벤트 이름
    - 이벤트 날짜 및 시간
    - Meetup Group 이름
    - RSVP 인원
    - 이벤트 호스트 이름
    - 이벤트 호스트 사진
3. 각각의 Meetup Event에 대한 즐겨찾기 기능
    - 사용자는 이벤트를 즐겨찾기 할 수 있어야 합니다.
    - 사용자가 즐겨찾기에 추가한 이벤트들을 명확하게 확인할 수 있어야 합니다.
    - 사용자는 즐겨찾기에서 이벤트를 제거할 수 있어야 합니다.
    - 즐겨찾기는 관련 API가 없기 때문에, [LocalStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 이용하여 관리해주시기 바랍니다.
