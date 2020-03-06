const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather.js');

// The below is as the app.get however we use router to direct
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/harrypotter', async (req, res) => {
    let data = await getWeather.getHarryPotter()
    // console.log(data);
    res.render('./harrypotter', {
        data,
        title: `Better be... ${data}`
    })
    
})

router.get('/getChuckNorris', async (req, res) => {
    let data = await getWeather.getChuckNorris()

     data = JSON.parse(data);
    // console.log(data);

    // console.log(data.value);

    let joke = data.value;
    
    res.render('./chucknorris', {
        data,
        joke: ` random Chuck Norris joke: ${joke}`
    })
    
})

router.get('/catFacts', async (req,res) => {
    let data = await getWeather.getCatFacts()

    data = JSON.parse((data));
    // console.log(data);

    console.log(data.all[0].text);
    let fact = data.all[0].text
    res.render('./catFacts',{
        data,
        fact: `${fact}` 
    })
    
})

router.get('/marvelcomics', async (req,res) => {

    let data= await getMarvel.getmarvelComics()

    data = JSON.parse((data));
    console.log(data);

    res.render('./marvelcomics.hbs', {
        data,
        title: `${title}`
        // display: ` Opps... something went wrong, come back later` 
    })
});

router.post('/', async (req, res) => {
    let city = req.body.city;
    let countryCode = req.body.countryCode;

    let data = await getWeather.getWeather(city, countryCode);

    let weatherData = {
        name: data.name,
        description: data.weather[0].description,
        temp: data.main.temp,
        sunrise: new Date(data.sys.sunrise),
        sunset: new Date(data.sys.sunbset)
    }

    let icon = data.weather[0].icon;

});

// router.post('/catFacts', async(req,res) => {

//     let data= await getWeather.getCatFacts(text)
//     let catFactObject = {
//         fact: data.text
//     }

//     res.render("catfacts", {
//         data: {
//             fact
//         }
//     } )
// });

module.exports = router;