import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Platform, StyleSheet, View, WebView, FlatList, TouchableWithoutFeedback, Alert } from 'react-native';
import { logout } from '../redux/actions/auth';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from "native-base";
//import Article from "./components/Article";
import {Card} from "react-native-elements";
//import Login from './components/Login';
//import Secured from './components/Secured';

class Secured extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsUrl: articles.articles[0].url
        }
    }

    onPress = (item: any) => {
        this.setState({
            newsUrl: item.url
        });
    };

    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                name="home"
                                onPress={() => {
                                    this.onPress(articles.articles[0]);
                                }}
                            />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Новости</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon
                                style={{fontSize: 30}}
                                type="MaterialCommunityIcons"
                                name="account"
                                onPress={() => {
                                    console.log("login")
                                }}
                            />
                        </Button>
                        <Button transparent>
                            <Icon
                                type="SimpleLineIcons"
                                name='logout'
                                onPress={(e) => this.userLogout(e)}
                            />
                        </Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{flex: 1}}>
                    <WebView
                        source={{uri: this.state.newsUrl}}
                        startInLoadingState={true}
                        scalesPageToFit={true}/>
                </Content>
                <Footer style={{height: 150}}>
                    <FooterTab>
                        <FlatList
                            horizontal
                            data={articles.articles}
                            renderItem={({item}) => (
                                <TouchableWithoutFeedback
                                    onPress={() => this.onPress(item)}>
                                    <Card containerStyle={{
                                        width: 200,
                                        height: 100,
                                        borderRadius: 30,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <ScrollView>
                                            <Text style={{fontSize: 12, color: 'green'}}>
                                                {item.title}
                                            </Text>
                                        </ScrollView>
                                    </Card>
                                </TouchableWithoutFeedback>
                            )}
                            keyExtractor={item => item.url}
                            //refreshing={this.state.refreshing}
                            //onRefresh={this.handleRefresh.bind(this)}
                        />
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
};

const articles: [] =
    {
        "articles": [
            {
                "source": {
                    "id": null,
                    "name": "Onliner.by"
                },
                "author": "Станислав Иванейко",
                "title": "Microsoft работает над ноутбуком нового поколения с двумя сенсорными дисплеями - Onliner",
                "description": "Ресурс Windows Central выяснил подробности о необычном ноутбуке, над которым Microsoft трудится совместно с Intel. Главная особенность устройства — у него будет дополнительный экран вместо клавиатурного блока.",
                "url": "https://tech.onliner.by/2018/12/04/microsoft-118",
                "urlToImage": "https://content.onliner.by/news/default/bc52bca885c57b944422de8387786c45.jpeg",
                "publishedAt": "2018-12-04T09:40:17Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Liga.net"
                },
                "author": null,
                "title": "Samsung выпустит 5G смартфон в 2019 году - новости технологий Украины и мира - Liga.net",
                "description": "Samsung и мобильный партнер Verizon нацеливаются на релиз в первой половине следующего года",
                "url": "https://tech.liga.net/gadgets/novosti/samsung-vypustit-5g-smartfon-v-2019-godu",
                "urlToImage": "https://tech.liga.net/images/general/2018/11/20/20181120175250-2898.jpg",
                "publishedAt": "2018-12-04T09:20:27Z",
                "content": "Samsung Verizon Samsung 2019. Qualcomm Snapdragon. TechCrunch. Samsung Verizon. Qualcomm, Snapdragon X50 5G NR Snapdragon., Samsung, 5G 2019, OnePlus Motorola, Moto Mod., Samsung, Apple, 2020. Samsung, 5G Mobile World Congress 2017. Verizon,, 5G,,, -."
            },
            {
                "source": {
                    "id": null,
                    "name": "Forklog.com"
                },
                "author": null,
                "title": "Криптовалюта Vertcoin подверглась атаке 51% - http://forklog.com/",
                "description": "Продолжающееся на протяжении практически всего года падение рынка и снижение хешрейта криптовалют делает многие из них все более уязвимыми к атаке 51%, что нашло подтверждение в очередном таком инциденте, на этот раз с криптовалютой Vertcoin (VTC). Начиная с …",
                "url": "https://forklog.com/kriptovalyuta-vertcoin-podverglas-atake-51/",
                "urlToImage": "https://forklog.com/wp-content/uploads/cr2_500h400.png",
                "publishedAt": "2018-12-04T09:15:32Z",
                "content": "51%,, Vertcoin (VTC). 15 $100,000. 22, 300.,, Coinbase. VTC experienced a 300 block reorg last night from vertcoin, 1,300 VTC... (,,, ),.,. Proof-of-Work « »,.,,.,,, ASIC-.,,, Vertcoin., Vertcoin ASIC-resistant,.,,. Vertcoin,,,. 51%,, Crypto51.,., Vertcoin $1… [+185 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ixbt.com"
                },
                "author": null,
                "title": "Представитель Intel рассказал о грядущих дискретных видеокартах компании - iXBT.com",
                "description": "То, что Intel в 2020 году выйдет на рынок дискретных видеокарт &mdash; это не слухи, а официальное заявление компании, которое она сделала ранее в этом году.\r\n\r\nОднако особых подробностей на этот счёт ранее не было.",
                "url": "https://www.ixbt.com/news/2018/12/04/predstavitel-intel-rasskazal-o-grjadushih-diskretnyh-videokartah-kompanii.html",
                "urlToImage": "https://www.ixbt.com/img/n1/news/2018/11/2/Intel-Graphics-Card-Discrete-Gaming-Solution_7-2060x1102_large.png",
                "publishedAt": "2018-12-04T09:01:00Z",
                "content": ", Intel 2020 —,,.. Intel Visual Technologies Team (Ari Rauch),,,,. -,, Intel, Nvidia AMD. GPU Intel Intel. -, Intel,, Intel., Intel, GPU,. -, Intel,, API., Intel 300,."
            },
            {
                "source": {
                    "id": null,
                    "name": "Forklog.com"
                },
                "author": null,
                "title": "Ведущая команда разработчиков Ethereum Classic заявила о прекращении деятельности - http://forklog.com/",
                "description": "ETCDEV, команда проекта Ethereum Classic (ETC), распалась из-за проблем с финансированием. Об этом команда ETCDEV сообщила в Twitter. Unfortunately ETCDEV cannot continue to work in the current situation and has to announce shutdown of our current activities …",
                "url": "https://forklog.com/vedushhaya-komanda-razrabotchikov-ethereum-classic-zayavila-o-prekrashhenii-deyatelnosti/",
                "urlToImage": "https://forklog.com/wp-content/uploads/unnamed-file-22.png",
                "publishedAt": "2018-12-04T08:36:21Z",
                "content": "ETCDEV, Ethereum Classic (ETC), -. ETCDEV Twitter. Unfortunately ETCDEV cannot continue to work in the current situation and has to announce shutdown of our current activities pic.twitter.com/N6xWnpBNJJ ETCDEV (@etcdev) 3 2018., ETCDEV -. «., », ETCDEV. Twitt… [+264 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Popmech.ru"
                },
                "author": "https://www.facebook.com/PopMechanics",
                "title": "Samsung Galaxy S10+ показали на видеорендере | Журнал Популярная Механика - Популярная Механика",
                "description": "В Сети появилось видео, демонстрирующее предположительный дизайн нового, еще не анонсированного смартфона Samsung Galaxy S10+.",
                "url": "https://www.popmech.ru/gadgets/news-452442-samsung-galaxy-s10-pokazali-na-videorendere/",
                "urlToImage": "https://images2.popmeh.ru/upload/img_cache/3e8/3e83c7cdae260bd109bf694fd83e9df6_ce_2048x1075x0x39_fitted_1260x700.png",
                "publishedAt": "2018-12-04T07:47:38Z",
                "content": "Samsung,.,, 91Mobiles @OnLeaks Galaxy S10+,., S10+,, 6,4- :, «»,,.,,,, 3,5-.,,. Samsung,, —, Mobile World Congress (MWC).,, AnTuTu Galaxy S10+, Exynos 9820."
            },
            {
                "source": {
                    "id": "rbc",
                    "name": "RBC"
                },
                "author": null,
                "title": "Миллиардер Джим Брейер: Bitcoin на пороге более глубокого падения - РБК",
                "description": "Криптовалюта готовится к новой негативной фазе, но у блокчейн-индустрии остаются колоссальные перспективы для развития, считает американский венчурный капиталист",
                "url": "https://www.rbc.ru/crypto/news/5c0630599a794706d5964796",
                "urlToImage": "https://s.rbk.ru/v1_crypto_static/current/images/social-icon.png",
                "publishedAt": "2018-12-04T07:46:57Z",
                "content": ",. 2018 Global Tech Forum,,,, Fortune. « », —. « »,.,. «,,. », —. Circle, Ethereum, VeChain High Fidelity. 2000-, - -, Facebook. - -."
            },
            {
                "source": {
                    "id": null,
                    "name": "3dnews.ru"
                },
                "author": null,
                "title": "NVIDIA создала игровую демонстрацию с графикой, генерируемой ИИ - 3DNews",
                "description": "NVIDIA время от времени рассказывает о результатах своих исследований и разработке новых методов повышения реализма и использования GPU. На этот раз компания представила первую в мире игровую демонстрацию, где графика создаётся не привычным методом растрирова…",
                "url": "https://3dnews.ru/979089",
                "urlToImage": "https://3dnews.ru/assets/external/illustrations/2018/12/04/979089/sm.01.750.jpg",
                "publishedAt": "2018-12-04T07:40:43Z",
                "content": ". — NVIDIA,,.,,. «, — - NVIDIA (Bryan Catanzaro) The Verge. —, NVIDIA,, ». NVIDIA,,. - -, NVIDIA.,, pix2pix. - (GAN),.,,.. :, $432 000. NVIDIA, —.,,,. —.,, Titan V $3000,,. NVIDIA. :,. :,,,,. GAN.,. Unreal Engine 4, Fortnite, PUBG, Gears of War 4.,,. «, —, —,… [+114 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ixbt.com"
                },
                "author": null,
                "title": "Xiaomi готовится обновить прошивку планшета Mi Pad 4 Plus до Android 9.0 Pie - iXBT.com",
                "description": "Компания Xioami представила планшетный компьютер Mi Pad 4 Plus на исходе лета. Устройство дебютировало с ОС Android 8.1 Oreo и сразу же после выхода получило несколько обновлений, которые добавили новые возможности и устранили ошибки.",
                "url": "https://www.ixbt.com/news/2018/12/04/xiaomi-mi-pad-4-plus-android-9-0-pie.html",
                "urlToImage": "https://www.ixbt.com/img/n1/news/2018/11/2/xiaaa_large.JPG",
                "publishedAt": "2018-12-04T07:14:00Z",
                "content": "Xioami Mi Pad 4 Plus. Android 8.1 Oreo,. – Android 9.0 Pie. Mi Pad 4 Plus, Android 9.0, Geekbench. 4 64 -, 1643 5854. Mi Pad 4 Plus Geekbench Android 9.0, Xiaomi."
            },
            {
                "source": {
                    "id": null,
                    "name": "3dnews.ru"
                },
                "author": null,
                "title": "Спрос на носимые устройства уверенно растёт - 3DNews",
                "description": "Компания International Data Corporation (IDC) подвела итоги исследования мирового рынка носимых устройств в третьем квартале текущего года.",
                "url": "https://3dnews.ru/979080",
                "urlToImage": "https://3dnews.ru/assets/external/illustrations/2018/12/04/979080/idc1.jpg",
                "publishedAt": "2018-12-04T07:08:08Z",
                "content": "International Data Corporation (IDC)., 32,0. : 21,7 %. Xiaomi. 6,9, 21,5 %. : Xiaomi 13,7 %. Apple 4,2 13,1 %. «» — 10,3 %. «» Fitbit, 3,5. 13,7 % 10,9 %. Huawei Samsung 5,9 % 5,6 %. 43,0 %."
            },
            {
                "source": {
                    "id": null,
                    "name": "Overclockers.ua"
                },
                "author": null,
                "title": "Набор драйверов GeForce 417.22 (WHQL) доступен к загрузке - Украинский оверклокерский портал",
                "description": "Nvidia сообщила о выпуске нового пакета драйверов и ПО GeForce под номером 417.22, имеющего сертификат тестовой лаборатории Microsoft WHQL и получившего статус Game Ready. Выпуск приурочен к релизу обновления&nbsp;Tides of War Chapter 1:...",
                "url": "https://www.overclockers.ua/news/software/2018-12-04/123426/",
                "urlToImage": "https://www.overclockers.ua/news/games/123425-battlefield-V-rtx-patch-1.jpg",
                "publishedAt": "2018-12-04T06:58:00Z",
                "content": "Nvidia GeForce 417.22, Microsoft WHQL Game Ready. Tides of War Chapter 1: Overture Update Battlefield V. Nvidia EA DICE DirectX Raytracing (DXR)., GeForce RTX 2080 Ti 60 fps 2560 × 1440 DXR Raytraced Reflections Ultra. GeForce RTX 2080 60 /c 2560 × 1440 Mediu… [+252 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gametech.ru"
                },
                "author": null,
                "title": "Они пытаются поддержать выход RDR 2 в Steam - инди-авторы недовольны новой политикой Valve - Gametech",
                "description": "На прошлой неделе Valve сообщила о том, что внесла изменения в правила касающиеся распределения доходов между Steam и разработчиками игр. Отныне если игра зарабатывает более 10 миллионов долларов, то Valve забирает себе только 25% выручки, а не 30%. Если прое…",
                "url": "https://www.gametech.ru/news/61735/",
                "urlToImage": "https://www.gametech.ru/sadm_images/00misha/news/Valvebigmoney_add.jpg",
                "publishedAt": "2018-12-04T06:43:00Z",
                "content": "Valve, Steam. 10, Valve 25%, 30%. 50, Valve 20%. -, Bethesda, Ubisoft Activision, Steam., Fallout 76 Call of Duty: Black Ops 4 Valve. Neat Corporation (Freya Holmér), Valve « ». Valve,, Steam,., Valve 20%,. (Jake Birkett) Grey Alien Games Valve, Steam « » -.,… [+391 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ixbt.com"
                },
                "author": null,
                "title": "Представлен мобильный аккумулятор Xiaomi ZMI Aura: 20 000 мАч, 27 Вт и цена – $29 - iXBT.com",
                "description": "У Xiaomi немало моделей портативных аккумуляторов, но еще одна точно лишней не будет. Новинка называется ZMI Aura, ее продажи в Китае стартуют уже завтра.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nОсобенностью этой модели является повышенная мощность выходного тока &ndash; 27 Вт.",
                "url": "https://www.ixbt.com/news/2018/12/04/xiaomi-zmi-aura-20-000-27-29.html",
                "urlToImage": "https://www.ixbt.com/img/n1/news/2018/11/2/xiaomi-20000-zmi-aura.jpg",
                "publishedAt": "2018-12-04T06:31:00Z",
                "content": "Xiaomi,. ZMI Aura,. – 27.. Xiaomi ZMI Aura ABS. – 20 000 ·,. USB-C microUSB. Xiaomi ZMI Aura $29."
            },
            {
                "source": {
                    "id": null,
                    "name": "Ria.ru"
                },
                "author": null,
                "title": "В \"Роскосмосе\" рассказали об информационной атаке на компанию - РИА Новости",
                "description": "\"Роскосмос\" подвергся информационной атаке, затеянной, чтобы помешать стране вернуть лидерство в космосе и создать образ \"пожирающей федеральные деньги\" госкорпорации. Такое РИА Новости, 04.12.2018",
                "url": "https://ria.ru/science/20181204/1541860364.html",
                "urlToImage": "https://cdn5.img.ria.ru/images/152709/50/1527095055.jpg",
                "publishedAt": "2018-12-04T06:30:02Z",
                "content": ", 4 —. \"\",, \" \". -.,,., 2017. \" —,,. \"\"., \", —., -,. 20,. -,. -, \"\". \" \", —. &gt;&gt;"
            },
            {
                "source": {
                    "id": null,
                    "name": "Mail.ru"
                },
                "author": "Григорий Матюхин",
                "title": "Apple назвала самые скачиваемые приложения для iPhone в России в 2018 году - Mail Hi-Tech - Hi-Tech.Mail.Ru",
                "description": "Ни одна игра не вошла в десятку.",
                "url": "https://hi-tech.mail.ru/news/appstore-rating-2018/",
                "urlToImage": "https://htstatic.imgsmail.ru/pic_share/3c42a6184097bac314861120f35b80c2/1277040/c/40997?time=1543913392",
                "publishedAt": "2018-12-04T05:55:00Z",
                "content": "App Store iPhone..,,., AppStore WhatsApp, Instagram «». « »,, Pandao. kirakira+ Glitché., AppStore. Facetune, Dalgona, Afterlight 2 TouchRetouch (4,5,6,7 ). #BS365 Workouts. App Store YouTube, Instagram Snapchat. WhatsApp 13. Facetune kirakira+, Dark Sky Weat… [+19 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Mail.ru"
                },
                "author": "Александр Щербаков",
                "title": "Microsoft откажется от браузера Edge в Windows 10 - Mail Hi-Tech - Hi-Tech.Mail.Ru",
                "description": "Ему на замену придет браузер на базе Chromium.",
                "url": "https://hi-tech.mail.ru/news/edge-poka/",
                "urlToImage": "https://htstatic.imgsmail.ru/pic_share/45c7b30fca4c8650ad7241c9330961cf/1277039/c/40996?time=1543908413",
                "publishedAt": "2018-12-04T04:44:00Z",
                "content": "Microsoft Edge 2015 Windows 10., Microsoft Edge Chromium, Chrome, Opera. WIndows 10 Anaheim. - EdgeHTML., Microsoft Chromium,. Edge,,, Chrome. Windows 10., Edge,,,, Windows Central. Edge Android iOS, Chromium., Edge Windows Internet Explorer,.,, Windows 10,..… [+18 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ixbt.com"
                },
                "author": null,
                "title": "И все-таки 855: новая флагманская однокристальная система Qualcomm называется Snapdragon 855 - iXBT.com",
                "description": "Компания Qualcomm должна представить свою новую флагманскую однокристальную платформу в ближайшие дни. Напомним, слухи приписывали ей обозначение Snapdragon 8150, но многие инсайдеры осторожно высказывались на этот счет: мол, 8150 &ndash; это только внутренне…",
                "url": "https://www.ixbt.com/news/2018/12/04/855-qualcomm-snapdragon-855.html",
                "urlToImage": "https://www.ixbt.com/img/n1/news/2018/11/2/Qualcomm-Snapdragon-855-1543887311-1-12.jpg",
                "publishedAt": "2018-12-04T04:08:00Z",
                "content": "Qualcomm., Snapdragon 8150, :, 8150 –,..., SoC – Snapdragon 855,,. : 5G ( Snapdragon X50), Snapdragon Elite Gaming (,, Huawei GPU Turbo), (NPU) 7-. TSMC., Snapdragon 855.,."
            },
            {
                "source": {
                    "id": null,
                    "name": "Ridus.ru"
                },
                "author": "Ридус",
                "title": "Названо лучшее приложение для Android в 2018 году - Ridus.ru",
                "description": "Стали известны итоги голосования Google Play Best of 2018 Awards.",
                "url": "https://www.ridus.ru/news/288634",
                "urlToImage": "https://www.ridus.ru/images/2018/12/4/851551/og_1d65a3249a.jpg",
                "publishedAt": "2018-12-04T03:50:00Z",
                "content": "© 2011-2018. - «»..., 21. * \"\", : « », « » (), (, ), « -» ( « -», « -»), - (), «-», «-», «», « - », « », « », «», « ». (), (), « » («Blood and Honour/Combat18», «B&amp;H», «BandH»), «», « »."
            },
            {
                "source": {
                    "id": null,
                    "name": "Vz.ru"
                },
                "author": null,
                "title": "Японско-французский консорциум решил выйти из проекта строительства АЭС в Турции - Взгляд",
                "description": "Консорциум частных и государственных предприятий Японии и Франции во главе с корпорацией Mitsubishi Heavy Industries принял решение отказаться от участия в строительстве АЭС в турецком городе Синоп, сообщает издание The Nikkei.",
                "url": "https://vz.ru/news/2018/12/4/953624.html",
                "urlToImage": "https://img.vz.ru/upimg/soc/soc_953624.jpg",
                "publishedAt": "2018-12-04T02:57:00Z",
                "content": "Mitsubishi Heavy Industries, The Nikkei., ( 44 ) «-1» 2011,.,,.,,,., «»,."
            },
            {
                "source": {
                    "id": null,
                    "name": "Rambler.ru"
                },
                "author": null,
                "title": "В США пристыдили «Роскосмос» за «сказки» - Рамблер/Новости",
                "description": "«Роскосмосу» и его партнерам вместо демонстрации видеороликов на YouTube и необоснованных обвинений в адрес американской компании SpaceX и ее главы Илона Маска следовало бы создать новую ракету, полагает редактор ArsTechnica…",
                "url": "https://news.rambler.ru/tech/41354798-v-ssha-pristydili-roskosmos-za-skazki/",
                "urlToImage": "https://img04.rl0.ru/bbfb58340541341a38ac24accb015a35/c600x315/news.rambler.ru/img/2018/12/04041642.824618.1884.jpeg",
                "publishedAt": "2018-12-04T01:16:41Z",
                "content": "«» YouTube SpaceX, ArsTechnica. « » ( «»),,, YouTube,,, SpaceX,. «,,, \" \"., (. «.» ) YouTube,, - »,. 2014 SpaceX Boeing CST-100 (Starliner) Dragon 2. 4,2 Boeing 2,6 SpaceX."
            }
        ]
    };

export default connect(mapStateToProps, mapDispatchToProps)(Secured);
