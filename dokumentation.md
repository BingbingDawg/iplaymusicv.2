# Dokumentation for IPlayMusic
Andreas Nielsen, WU12

## Tect-stack
* Next.js
* React
* Git
* Tailwind
* React-icons
* Zod
* Web-API fra Spotify

## Kode-eksempel
Header komponent
src/app/components/site-header/index.jsx

``` jsx

export default function SiteHeader({
returnToPage = true,
  }) {
  const router = useRouter();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState("")

  useEffect(function() {
    switch(pathname) {
      case "/":
        setShowSearch(true);
        setTitle("Featured")
        break;
      
    }
  }, [pathname]);
   
  return (
    <header className="headerMenu">
      {returnToPage && (
        <button  type="button" onClick={() => router.back()}>
        <IoIosArrowBack
          className="col-1 w-auto text-[18px]"
          />
        </button>
      )}
      {title && (
        <p className="col-2 text-lg uppercase">
          {title}
        </p>
      )}
      {showSearch && (
        <IoIosSearch className="col-3 justify-self-end text-[18px] w-auto" />
      )}
    </header>
  );
}
```
Jeg kalder en React hook "useState" som er en function, der
returernere et array. Arrayet indeholder 2 elementer: Et state og sætter fukntion
til statet. useState tager imod et argument "intitialState" som er værdien af
statet ved start.
