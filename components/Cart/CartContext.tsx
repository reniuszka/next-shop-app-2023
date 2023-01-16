import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
//nie chcemy mutowac tych danych np CartItem.count++ tylko lepie stworzyc nowy newItem
interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

interface CartState {
  items: CartItem[];
  //dodajemy metode ktora pobiera dana item typu CartItem i zmienia jej wartosc ale nic nie zwraca bo to taki side effect, zmienia stan wiec bedzie void(nic nie zwraca, zmienia tylko stan storu ktory jest w konctekscie)
  //dodaj do koszyka i sprawdz czy moze juz to wystepuje w koszyku

  addItemToCart: (item: CartItem) => void;
  //usun z koszyka CartItem['id'] = number -> chodzi nam o id z CartItem
  removeItemFromCart: (id: CartItem["id"]) => void;
  //wyczysc koszyk
}

export const CartStateContext = createContext<CartState | null>(null);
// export const {Provider,Consumer} = createContext<CartState | null>(null);
//nasz provider przekazuje stan do children dlatego mamy children w propsach (to ta reszta naszego drzewa)

//sluzy by wstrzykiwac ten stan do drzewa i ten CartStateContextProvider uzyjemy w pliku _app a by potem go uzyc w komponencie uzyj useCOntext(CartStateContext i wyciagnij co chcesz z value)

// nazwa w local storagu: 'zaiste_shopping_cart' ! localStorage jest tylko w przegladarce, nie ma jej w nodzie! i uzyjemy useEffect bo to bedzie efkt uboczny i on sie wykonuje tylko w przegladarce
// 1. odczytac z localStorage
// 1a) if jesli cos jest w koszyku to ustawic 'cartItems'
// 2. gdy cos sie zmieni to zapisac do localstorage
//getItem moze dawac nulla
//sprobujemy sparsowac i jesli sie nie uda to musimy wyrzucic wyjatek  try catch

//by obrac dane z local storage
const getCartItemsFromLocalStorage = () => {
  const itemFromLocalStorage = localStorage.getItem("ZAISTE_SHOPPING_CART");
  if (!itemFromLocalStorage) {
    // zwracamy tablice czyli domyslna wartosc
    return [];
  }
  try {
    // 1a) if jesli cos jest w koszyku to ustawic 'cartItems' (bo jesli mamy refresh to ten stan sie utzyma a nie wyzeruje) JSON wbudowany w przegladarke
    const items = JSON.parse(itemFromLocalStorage);
    return items;
    // setCartItems(items);
  } catch (error) {
    console.log("error with parse.json", error);
    return [];
  }
};

//gdy zmienia sie wartosc koszyka
const setCartItemsInLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("ZAISTE_SHOPPING_CART", JSON.stringify(cartItems));
};

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //tutaj dajemy stan
  //ten obiekt odpowiada CartState
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //localStorage wbudowane Api przegladarki
  useEffect(() => {
    // const itemFromLocalStorage = localStorage.getItem("ZAISTE_SHOPPING_CART");
    // if (!itemFromLocalStorage) {
    //   return;
    // }
    // try {
    //   // 1a) if jesli cos jest w koszyku to ustawic 'cartItems' (bo jesli mamy refresh to ten stan sie utzyma a nie wyzeruje) JSON wbudowany w przegladarke
    //   const items = JSON.parse(itemFromLocalStorage);
    //   setCartItems(items);
    // } catch (error) {
    //   console.log("error with parse.json", error);
    //   return;
    // }
    //odczytac dane z local storage
    setCartItems(getCartItemsFromLocalStorage());
  }, []); // tylko raz na początku

  //ustawic dane z koszyka gdu cos sie w nim zmienia do localStorage i zamiasny z naszego obiektu na JSON - string
  // useEffect(() => {
  //   localStorage.setItem("ZAISTE_SHOPPING_CART", JSON.stringify(cartItems));
  // }, [cartItems]);
  //poki co wszystko jest w local storage po stroneioe klienta a np w nocy zmieni sie cena i chcemy to zapisywac i komunikowac z local storage za posrednictwem serwera gdzie mozemy sie odnosic i updatowac np ta cene- zrobie to z graphql
  useEffect(() => {
    if (cartItems === undefined) {
      return;
    }
    setCartItemsInLocalStorage(cartItems);
  }, [cartItems]); // gdy zmieni się cartItems

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems || [],
        //w ponizszej metodzie chcemy przekazac stary stan z cartItems i dodac nowy item by utworzyc nowy i podmieniam stara liste na nowa: setCartItems(newItems)
        // podejscie synchroniczne:
        //ponizej chcemy dolaczyc nowy element do listy i zastapic biezaca liste tą nowa listą, czyli bierzemy spreda i rozsmarowywujemy smara liste na nowej liscie i dodaje nowy item
        // const newItems=[...cartItems, item ]
        // asynchroniecznie(gdy np wykonujemy zapytanie do api i w kilku miejscach modyfikujemy stan): gdy mamy nowy stan ktory zalezy od poprzedniego stanu to react ma specjalny sposob tego wywolywania i zamiast wartosci przkazujemy funcje w setCartItems, jako argument fcja dostanie cartItems czyli prevState i tworzymy jej nowy stan: [...cartItems,item]
        //dodaj do koszyka i sprawdz czy moze juz to wystepuje w koszyku
        // lepiej utworzyc nowa dana niz ja ciagle mutowac: exsistingItem.count++ to gorsze rozwiazanie, lepiej stworzyc const newItem = {...exsistingItem, Coount: exsistingItem.count +1}
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            if (!prevState) return [item];
            //sprawdzamy czy juz w koszyku istnieje ten item-> wynik bedzie z danymi albo undefined
            const existingItemCheck = prevState.find(
              (existingItem) => existingItem.id === item.id
            );
            //jesli nic nie znaleziono to dodaj go do listy
            if (!existingItemCheck) {
              return [...prevState, item];
            }
            //nie chcemy tak mutowac danych: const index = prevState.indexOf(existingItem) i potem prevState[index].count++
            //jesli cos znaleziono to bierzemy ten element, lokalizujemy z tablicy i dodajemy 1 do count -> tworzymy nowa tablice bo chcemy TWORZYC NOWY STAN
            //spredujemy istniejace i zmieniamy count +1 => lawiej sledzic jak sie dane zmieniaja i tworzyc nowe, niz je mutowac . Mozemy dodac reguje to TS by nie mutowac danych poprzez 'readonly'

            //jezeli title juz sie powiela to chcemy zwrocic nowy obiekt, jeslis sie 1 raz poajawi to zwracamy ten stary
            return prevState.map((existingItemCheck) => {
              if (existingItemCheck.id === item.id) {
                return {
                  ...existingItemCheck,
                  count: existingItemCheck.count + 1,
                };
              }
              //bo zaloazenie ze przy 1 dodaniu bedzie count:1
              return existingItemCheck;
            });
            // const newItem = {
            //   ...existingItemCheck,
            //   count: existingItemCheck.count + 1,
            // };
            // return [...prevState, newItem];
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState) => {
            // 'prevState' is possibly 'undefined':
            if (!prevState) return [];
            //w stanie sprawdzamy czy istnieje nasze id
            const existingItem = prevState.find(
              (elemItem) => elemItem.id === id
            );
            // jesli istnieje to id w koszyku i jego count jest mniejsze lub rowne 1 to usuwamy z naszej tablicy: mowimy chcemy te elementy ktore nie sa rowne mojemu id
            if (existingItem && existingItem.count <= 1) {
              return prevState.filter((element) => element.id !== id);
            }
            // jesli istnieje i jest wieksze od 1
            return prevState.map((element) => {
              if (element.id === id) {
                return {
                  ...element,
                  count: element.count - 1,
                };
              }
              return element;
            });
          });
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error("You forgot CartStateContextProvider");
  }
  return cartState;
};
