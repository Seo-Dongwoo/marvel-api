# Marvel API
## 📄 프로젝트 목적 및 설명
* ### 목적
  * API 이용해서 Data Fetch를 이해 및 학습
  * axios에 대해 이해 및 학습
  * react hooks로 데이터 상태관리
* ### 설명
  * useState, useEffect를 이용해 검색 결과인 query값에 따른 Data-Fetch 구현
  * md5를 이용해서 hash 값을 구해서 넣어줬다.
  * map메소드를 이용해서 가져온 데이터로 Layout 구현
---
## 🛠 개발 기간 및 사용 기술

- **개발 기간** : 20222.05 ~ 2022.05
* **사용 기술** 

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>

---
## 🔧 이슈 및 해결

- hash 값에 넣는 값을 md5를 이용해서 암호화해서 넣는 작업에서 어려움을 겪었다.
- 검색했을 때 검색한 결과에 따른 데이터를 보여지는 부분에서 어려움을 겪었다.

- 첫 번째 이슈
```
const hash = "41f9d7f2fcdc14190b3add7ef148603a";

const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
```
#### md5를 이용해서 hash 값을 구해서 넣어줬다.
---
- 두 번째 이슈
```
const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const MarvelFetch = async () => {
      if (query === "") {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setIsLoading(false);
      } else {
        const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
        console.log(result.data.data.results);
        setItems(result.data.data.results);
        setIsLoading(false);
      }
    };

    MarvelFetch();
  }, [query]);
  ```
#### useState, useEffect를 이용해서 query 값에 따른 데이터가 보여지게 해줬다.
---
### 배포

