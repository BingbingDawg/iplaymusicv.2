# Dokumentation for IPlayMusic
Andreas Nielsen, WU12

## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver 
adgang til server-side komponenter og -actions, samt mappebaseret
routing. Server-side komponenter og funktioner giver en større
sikkerhed, da al koden afvijkes på serveren fremfor i klienten.
* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og
håndtere states på en god og let måde. React har et stort community
med et stort modul-bibliotek, som er aktivt, vel-dokumenteret og
vel.understøttet. Det er også det mest brugte front-end bibliotek i
verden, så eftrersprøgsæem på React-udviklere er stor.
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner
af min kode, så jeg let kan gå tilbage til tidligere versioner, 
hvis jeg for eksempel har lavet en fejl. Jeg bruger med GitHub.

* **Tailwind**
Et utility-baseret mobile-first CSS bibliotek.  
* **React-icons**
Et ikon-bibliotek, som er beregnet på React.
* **Zod**
Et valideringsbibliotek til objekter og strings. 
Jeg bruger Zod til blandt andet at validere bruger-input fra formulere

* **Web-API fra Spotify**  
Et interface til at få adgang til Spotify's data, så
jeg kan lave min egen app. Dette er den eneste måde
hvor jeg lovligt kan få adgang til Spotify's data.

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


