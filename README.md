# Marvel API 이용해서 데이터 가져오기

학습 목적
--- 
- 로그인 로그아웃 프로젝트를 진행하면서 API 이용해서 데이터를 가져오는 것을 더 학습하고 싶었다.
- axios를 이용해서 데이터 가져오기
- useState, useEffect를 이용해서 상태 변화에 따른 데이터가 보여지는 것을 학습하고 싶었다.

학습 중 어려움
---
- hash 값에 넣는 값을 md5를 이용해서 암호화해서 넣는 작업에서 어려움을 겪었다.
- 검색했을 때 검색한 결과에 따른 데이터를 보여지는 부분에서 어려움을 겪었다.

어려움 해결 과정
---
- 첫 번째 어려움
```
const hash = "41f9d7f2fcdc14190b3add7ef148603a";

const result = await axios(
          `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ea4e165895ae02665813f27279cad123&hash=${hash}`
        );
```
md5를 이용해서 hash 값을 구해서 넣어줬다.

- 두 번째 어려움
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
  useState를 이용해서 query 값에 따른 데이터가 보여지게 해줬다.

