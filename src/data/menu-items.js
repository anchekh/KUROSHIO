//рамены
import BeefShoyuramen from "@/assets/images/ramen/Beef-Shoyu-ramen.jpg"
import LianzhoubeefRamen from "@/assets/images/ramen/Lianzhou-beef-Ramen.jpg"
import ShrimpSioramen from "@/assets/images/ramen/Shrimp-Sio-ramen.jpg"
import PorkMisoramen from "@/assets/images/ramen/Pork-Miso-ramen.jpg"
import SpicyPorkMisoramen from "@/assets/images/ramen/Spicy-Pork-Miso-ramen.jpg"
import ShoyuRamenwithChicken from "@/assets/images/ramen/Shoyu-Ramen-with-Chicken.jpg"

//закуски
import CrispyEggplant from "@/assets/images/snacks/Crispy-Eggplant.jpg"
import TempuraPrawns from "@/assets/images/snacks/Tempura-Prawns.jpg"
import WasabiPrawns from "@/assets/images/snacks/Wasabi-Prawns.jpg"
import Chickenkaraage from "@/assets/images/snacks/Chicken-karaage.jpg"
import CrispySalmonMiniTacos from "@/assets/images/snacks/Crispy-Salmon-Mini-Tacos.jpg"
import CrispyTunaMiniTacos from "@/assets/images/snacks/Crispy-Tuna-Mini-Tacos.jpg"

//гедза
import ShrimpGyoza from "@/assets/images/gyoza/Shrimp-Gyoza.jpg"
import ChickenGyoza from "@/assets/images/gyoza/Chicken-Gyoza.jpg"
import BeefGyoza from "@/assets/images/gyoza/Beef-Gyoza.jpg"
import PorkGyoza from "@/assets/images/gyoza/Pork-Gyoza.jpg"
import GyozaTomYum from "@/assets/images/gyoza/Gyoza-Tom-Yum.jpg"

//роллы
import CanadaMaki from "@/assets/images/rolls/Canada-Maki.jpg"
import PhiladelphiaMaki from "@/assets/images/rolls/Philadelphia-Maki.jpg"
import AvocadoMaki from "@/assets/images/rolls/Avocado-Maki.jpg"
import CaliforniaEbi from "@/assets/images/rolls/California-Ebi.jpg"
import EbiTempuraMaki from "@/assets/images/rolls/Ebi-Tempura-Maki.jpg"

//суши
import SyakeNigiri from "@/assets/images/sushi/Syake-Nigiri.jpg"
import MaguroNigiri from "@/assets/images/sushi/Maguro-Nigiri.jpg"
import UnagiNigiri from "@/assets/images/sushi/Unagi-Nigiri.jpg"
import GunkanSpicySyake from "@/assets/images/sushi/Gunkan-Spicy-Syake.jpg"
import GunkanSpicyMaguro from "@/assets/images/sushi/Gunkan-Spicy-Maguro.jpg"

//лапша
import BeefUdonnoodles from "@/assets/images/noodles/Beef-Udon-noodles.jpg"
import ChickenUdonnoodles from "@/assets/images/noodles/Chicken-Udon-noodles.jpg"
import Shrimpsingarlicsaucewithramennoodles from "@/assets/images/noodles/Shrimps-in-garlic-sauce-with-ramen-noodles.jpg"
import Ramennoodleswithbeefandmushrooms from "@/assets/images/noodles/Ramen-noodles-with-beef-and-mushrooms.jpg"
import Yakisobanoodleswithduck from "@/assets/images/noodles/Yakisoba-noodles-with-duck.jpg"

//рис
import Gohan from "@/assets/images/rice/Gohan.jpg"
import KimchiTyahan from "@/assets/images/rice/Kimchi-Tyahan.jpg"
import UnagiDzyu from "@/assets/images/rice/Unagi-Dzyu.jpg"
import VegetableRiceWithEgg from "@/assets/images/rice/Vegetable-Rice-with-egg.jpg"
import ChickenRice from "@/assets/images/rice/Chicken-Rice.jpg"

//дессерты
import ChocolateFondant from "@/assets/images/desserts/Chocolate-fondant.jpg"
import DubayskiyChizkeyk from "@/assets/images/desserts/Dubayskiy-chizkeyk.jpg"
import LemonTart from "@/assets/images/desserts/Lemon-Tart.jpg"
import Medovyk from "@/assets/images/desserts/Medovyk.jpg"
import SanSebastian from "@/assets/images/desserts/San-Sebastian.jpg"
import TartletWithSeasonalBerries from "@/assets/images/desserts/Tartlet-with-seasonal-berries.jpg"

const menuItems = {
    ramen: [
    {
        id: 1,
        title: "Сёю Рамен с говядиной",
        description: "Классический рамен с говядиной (Легкий куриный бульон, лапша рамен, соус сёю, яйцо маринованное, говядина ростбиф, лук зеленый, шпинат, водоросли нори, черный перец.)",
        price: 740,
        image: BeefShoyuramen,
        category: "ramen"
    },
    {
        id: 2,
        title: "Рамен Ляньчжоу с говядиной",
        description: "Рамен Ляньчжоу с говядиной (Говяжий бульон с ароматными специями, лапша рамен, говядина, маринованное яйцо, маринованный дайкон, лук зеленый, кинза, соус лаогонма.)",
        price: 740,
        image: LianzhoubeefRamen,
        category: "ramen"
    },
    {
        id: 3,
        title: "Сио Рамен с креветками",
        description: "Классический рамен с креветками (Легкий куриный бульон, лапша рамен, соус биск, соус сио, яйцо маринованное, тигровые креветки жареные, руккола, лук порей маринованный, водоросли нори)",
        price: 740,
        image: ShrimpSioramen,
        category: "ramen"
    },
    {
        id: 4,
        title: "Мисо Рамен со свининой",
        description: "Классический рамен с рулетом из свиной шеи на основе пасты из соевых бобов. Густой насыщенный бульон с соусом мисо, лапша рамен, рулет из свиной шеи, маринованные ростки сои, капуста ким чи, лук зеленый, водоросли нори.",
        price: 820,
        image: PorkMisoramen,
        category: "ramen"
    },
    {
        id: 5,
        title: "Острый мисо Рамен со свининой",
        description: "Острый рамен с рулетом из свиной шеи (Густой куриный бульон с соусом мисо и острой пастой кочудян, лапша рамен, рулет из свиной шеи, маринованные ростки сои, капуста ким чи, маринованное яйцо, лук зеленый, водоросли нори).",
        price: 820,
        image: SpicyPorkMisoramen,
        category: "ramen"
    },
    {
        id: 6,
        title: "Сею Рамен с курицей",
        description: "Легкий куриный бульон, лапша рамен, соус сею, куриное филе су-вид, маринованное яйцо, редис, лук порей маринованный, лист нори.",
        price: 730,
        image: ShoyuRamenwithChicken,
        category: "ramen"
    },
    ],
    snacks: [
    {
        id: 7,
        title: "Хрустящие баклажаны",
        description: "Хрустящие баклажаны, обжаренные с устричным соусом, помидорами черри, бобами эдамаме, кинзой и орехами кешью",
        price: 480,
        image: CrispyEggplant,
        category: "snacks"
    },
    {
        id: 8,
        title: "Креветки темпура",
        description: "Креветки, обжаренные в панировке с соусом спайс, соусом унаги, кунжутом, икрой тобико, подаются с водорослями нори.",
        price: 510,
        image: TempuraPrawns,
        category: "snacks"
    },
    {
        id: 9,
        title: "Креветки васаби",
        description: "Креветки, обжаренные в панировке с соусом васаби, соусом унаги, кунжутом, икрой тобико, подаются с водорослями нори.",
        price: 510,
        image: WasabiPrawns,
        category: "snacks"
    },
    {
        id: 10,
        title: "Курица карааге",
        description: "Обжаренное филе куриного бедра, маринованное в имбирном соусе, капуста кимчи, маринованные огурцы, лайм, соус сладкий чили, кинза.",
        price: 520,
        image: Chickenkaraage,
        category: "snacks"
    },
    {
        id: 11,
        title: "Хрустящие мини-тако с лососем",
        description: "Жареное тесто, творожный сыр, салат айсберг, огурец, маринованный лосось со сладким соусом чили, соусом терияки, и кинзой.",
        price: 490,
        image: CrispySalmonMiniTacos,
        category: "snacks"
    },
    {
        id: 12,
        title: "Хрустящие мини-тако с тунцом",
        description: "Жареное тесто, творожный сыр, салат айсберг, огурец, маринованный тунец с устричным соусом и соусом спайс.",
        price: 470,
        image: CrispyTunaMiniTacos,
        category: "snacks"
    },
    ],
    gyoza: [
    {
        id: 13,
        title: "Гедза с креветками",
        description: "Традиционные японские пельмени ручной лепки, подаются с соусом гедза, с фаршем из креветок (креветки, капуста китайская, сыр пармезан, соус сладкий чили).",
        price: 580,
        image: ShrimpGyoza,
        category: "gyoza"
    },
    {
        id: 14,
        title: "Гедза с курицей",
        description: "Традиционные японские пельмени ручной лепки, подаются с соусом гедза, с фаршем из курицы (куриный фарш, корень имбиря, лук порей, шампиньоны, капуста китайская, соус устричный).",
        price: 490,
        image: ChickenGyoza,
        category: "gyoza"
    },
    {
        id: 15,
        title: "Гедза с говядиной",
        description: "Традиционные японские пельмени ручной лепки, подаются с соусом гедза, с фаршем из говядины (говядина, пармезан, капуста пекинская, лук зелёный, чеснок, устричный соус, корень имбиря).",
        price: 580,
        image: BeefGyoza,
        category: "gyoza"
    },
    {
        id: 16,
        title: "Гедза со свининой",
        description: "Традиционные японские пельмени ручной лепки, подаются с соусом гедза, с фаршем из свинины (cвинина, капуста пекинская, чеснок, корень имбиря, лук зелёный, соевый соус, паста кочудян).",
        price: 580,
        image: PorkGyoza,
        category: "gyoza"
    },
    {
        id: 17,
        title: "Гедза Том Ям",
        description: "Гедза с начинкой из креветки, кальмара и грибов в сочетании со знаменитым соусом Том Ям. Украшаются зеленым луком.",
        price: 590,
        image: GyozaTomYum,
        category: "gyoza"
    },
    ],
    rolls: [
    {
        id: 18,
        title: "Канада маки",
        description: "Суши рис, водоросли нори, творожный сыр, омлет томаго, угорь, огурец, соус унаги, кунжут, маринованный имбирь, васаби.",
        price: 720,
        image: CanadaMaki,
        category: "rolls"
    },
    {
        id: 19,
        title: "Филадельфия маки",
        description: "Суши рис, водоросли нори, творожный сыр, лосось, авокадо, маринованный имбирь, васаби.",
        price: 790,
        image: PhiladelphiaMaki,
        category: "rolls"
    },
    {
        id: 20,
        title: "Авокадо маки",
        description: "Суши рис, водоросли нори, творожный сыр, лосось, авокадо, соус унаги, соус с тобико, икра тобико, маринованный имбирь, васаби.",
        price: 670,
        image: AvocadoMaki,
        category: "rolls"
    },
    {
        id: 21,
        title: "Калифорния эби",
        description: "Суши рис, водоросли нори, тигровые креветки, авокадо, омлет томаго, майонез, икра тобико, маринованный имбирь, васаби.",
        price: 640,
        image: CaliforniaEbi,
        category: "rolls"
    },
    {
        id: 22,
        title: "Эби темпура маки",
        description: "Суши рис, водоросли нори, огурец, креветка в кляре, икра тобико, соус спайс, соус унаги, маринованный имбирь, васаби.",
        price: 590,
        image: EbiTempuraMaki,
        category: "rolls"
    },
    ],
    sushi: [
    {
        id: 23,
        title: "Сяке нигири",
        description: "Суши с лососем.",
        price: 240,
        image: SyakeNigiri,
        category: "sushi"
    },
    {
        id: 24,
        title: "Магуро нигири",
        description: "Суши с тунцом.",
        price: 210,
        image: MaguroNigiri,
        category: "sushi"
    },
    {
        id: 25,
        title: "Унаги нигири",
        description: "Суши с угрем.",
        price: 210,
        image: UnagiNigiri,
        category: "sushi"
    },
    {
        id: 26,
        title: "Гункан спайси сяке",
        description: "Суши с лососем в соусе спайс.",
        price: 190,
        image: GunkanSpicySyake,
        category: "sushi"
    },
    {
        id: 27,
        title: "Гункан спайси магуро",
        description: "Суши с тунцом в соусе спайси.",
        price: 180,
        image: GunkanSpicyMaguro,
        category: "sushi"
    },
    ],
    noodles: [
    {
        id: 28,
        title: "Лапша удон с говядиной",
        description: "Лапша удон, обжаренная с говядиной и овощами (баклажан, кабачок, морковь, лук красный, грибы шиитаке, перец болгарский) в устричном соусе, лук зеленый, кинза, перец чили.",
        price: 640,
        image: BeefUdonnoodles,
        category: "noodles"
    },
    {
        id: 29,
        title: "Лапша удон с курицей",
        description: "Лапша удон с жареной курицей и овощами (баклажаны, цуккини, морковь, красный лук, грибы шиитаке, болгарский перец), устричный соус, зеленый лук, кориандр, перец чили.",
        price: 630,
        image: ChickenUdonnoodles,
        category: "noodles"
    },
    {
        id: 30,
        title: "Креветки в чесночном соусе с лапшой рамен",
        description: "Тигровые креветки, обжаренные с чесноком, мисо-пастой, пастой кочудян и зеленым луком. Подаются с лапшой рамен, рукколой и долькой лайма.",
        price: 590,
        image: Shrimpsingarlicsaucewithramennoodles,
        category: "noodles"
    },
    {
        id: 31,
        title: "Лапша Рамен с говядиной и грибами",
        description: "Лапша рамен, говядина, вешенки, шиитаке, шпинат, соус хой син.",
        price: 640,
        image: Ramennoodleswithbeefandmushrooms,
        category: "noodles"
    },
    {
        id: 32,
        title: "Лапша Якисоба с уткой",
        description: "Лапша рамен, утка конфи, капуста бк, морковь, лук зеленый, ростки сои, перец сладкий, соус яки соба.",
        price: 620,
        image: Yakisobanoodleswithduck,
        category: "noodles"
    },
    ],
    rice: [
    {
        id: 33,
        title: "Гохан",
        description: "Традиционный гарнир из японского риса, приготовленного на пару, украшается кунжутом.",
        price: 120,
        image: Gohan,
        category: "rice"
    },
    {
        id: 34,
        title: "Кимчи тяхан",
        description: "Рис, обжаренный с беконом, свининой и капустой кимчи в перечно-устричном соусе. Подается с яйцом.",
        price: 430,
        image: KimchiTyahan,
        category: "rice"
    },
    {
        id: 35,
        title: "Унаги Дзю",
        description: "Нежное филе копчёного угря под соусом унаги на подушке из риса. Украшается кунжутом.",
        price: 650,
        image: UnagiDzyu,
        category: "rice"
    },
    {
        id: 36,
        title: "Рис с овощами и яйцом",
        description: "Обжаренный рис с овощами (кабачок, баклажан, шампиньоны, капуста) с соусом терияки блэк гарлик, яичницей-глазуньей и битыми огурцами.",
        price: 480,
        image: VegetableRiceWithEgg,
        category: "rice"
    },
    {
        id: 37,
        title: "Рис с курицей",
        description: "Обжаренный рис с овощами и (кабачок, баклажан, шампиньоны, капуста) с соусом терияки, курицей терияки, яичницей-глазуньей и капустой кимчи.",
        price: 540,
        image: ChickenRice,
        category: "rice"
    },
    ],
    desserts: [
    {
        id: 38,
        title: "Шоколадный фондан",
        description: "Нежный шоколадный кейк с хрустящей корочкой и тающей шоколадной начинкой. Подаётся с карамельно-сливочным кремом.",
        price: 390,
        image: ChocolateFondant,
        category: "desserts"
    },
    {
        id: 39,
        title: "Дубайский чизкейк",
        description: "Классический чизкейк, покрытый слоем из теста катаифи и фисташковой пасты. Украшается красной смородиной.",
        price: 510,
        image: DubayskiyChizkeyk,
        category: "desserts"
    },
    {
        id: 40,
        title: "Лимонный тарт",
        description: "Хрустящая корзинка из песочного теста с итальянской меренгой и лимонным кремом внутри. Украшается безе и ягодой.",
        price: 390,
        image: LemonTart,
        category: "desserts"
    },
    {
        id: 41,
        title: "Медовик",
        description: "Медовые коржи со сметанным кремом, подаются с брусничным соусом. Украшаются красной смородиной.",
        price: 360,
        image: Medovyk,
        category: "desserts"
    },
    {
        id: 42,
        title: "Сан-себастьян",
        description: "Чизкейк сан-себастьян, подаётся с тёплым карамельным соусом.",
        price: 420,
        image: SanSebastian,
        category: "desserts"
    },
    {
        id: 43,
        title: "Тарталетка с сезонными ягодами",
        description: "Хрустящая корзинка из песочного теста, с кремом маскарпоне, сезонными ягодами и фруктами.",
        price: 480,
        image: TartletWithSeasonalBerries,
        category: "desserts"
    }
    ],
};

export default menuItems;