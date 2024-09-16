// if condition
Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this)
    }
    return options.inverse(this)
})
//breakrow
Handlebars.registerHelper('br', function (contents) {
    let str = contents
    str = str.replace(/\r?\n/g, '<br>')
    return str
})
window.onload = function () {
    const source = $('#sakeList').html()
    const template = Handlebars.compile(source)
    const value = {
        sakeList: [
            {
                image: 'Daishichi-Junmai-Kimoto',
                maker: 'DAISHICHI SAKE BREWERY CO. LTD',
                name: 'Daishichi Junmai Kimoto',
                alink: 'Daishichi-Junmai-Kimoto',
                sake_detail: `Daishichi Junmai Kimoto, introduced in 1983, is the result of over 20 years of innovation. The 8th Shichiuemon Ohta revived the kimoto method in 1955 after overcoming wartime disruptions. Ohta developed advanced rice polishing and low-temperature fermentation techniques, which were breakthroughs that transformed sake-making, enabling the production of Junmai Kimoto. Now globally recognised as the quintessential kimoto-brewed sake, it strikes a balance of rich flavours and acidity through full maturation, culminating in a fresh, clean finish.`,
                brewery_detail: `Established in 1752 during the Hōreki period, Daishichi Sake Brewery has maintained a strict adherence to the traditional kimoto brewing method. Renowned for their rich, mellow sakes, Daishichi's offerings showcase the best of kimoto sake. \n\nThe Ohta family, originally from the old Ise province, founded the brewery in Nihonmatsu, and it is now led by the 10th generation. Daishichi's sakes are celebrated for being good accompaniments to meals, and forming perfect pairings with fine cuisine. Acclaimed globally, they have set a new standard in the history of superb sake.`,
                sake_type: `Junmai`,
                rice_type: `Gohyakumangoku`,
                rice_ratio: `69%`,
                alcohol: `15%`,
                SMV: `+2`,
                area: `Fukushima`,
                buy: ``
            },
            {
                image: 'Kamotsuru-Tokusei-Gold-Daiginjo',
                maker: 'KAMOTSURU SAKE BREWING CO. LTD',
                name: 'Kamotsuru Tokusei Gold Daiginjo',
                alink: 'Kamotsuru-Tokusei-Gold-Daiginjo',
                sake_detail: `Kamotsuru's Signature Blend is the original gold-flaked Daiginjo sake, marked by two edible gold flake Sakura blossoms in each bottle that represent a pair of cranes bonded for life. It emanates aromas of strawberry and banana, with fresh, tropical flavours on the palate. Drinking this sake is like taking a deep breath atop Mt. Misen, instilling a sense of balance and tranquility. Crisp and light, it possesses the classic characteristics of sake.`,
                brewery_detail: `Since 1873, Kamotsuru has been a leader in rice polishing technology, winning multiple awards for its innovative sake brewing. After reviving the brand over 50 years ago, Kamotsuru made history as the first to release Daiginjo-grade sake to the public. Named by Wahei Kimura, one of Saijo's esteemed sake patrons, Kamotsuru combines Japanese tradition with a touch of Western influence. Its architecture features four smokestacks that reflect the brewery's impressive size for its time. Today, Kamotsuru continues to pursue excellence, solidifying its reputation as a premier producer of high-quality sake in the industry.`,
                sake_type: `Daiginjo`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `50%`,
                alcohol: `16%`,
                SMV: `+1.5`,
                area: `Hiroshima`,
                buy: ``
            },
            {
                image: 'Kokuryu-Daiginjo-Crystal-Dragon',
                maker: 'KOKURYU SAKE BREWING CORPORATION',
                name: 'Kokuryu Daiginjo Crystal Dragon',
                alink: 'Kokuryu-Daiginjo-Crystal-Dragon',
                sake_detail: `This "Crystal Dragon" daiginjo sake from Kokuryu Sake Brewery is a standout example of the daiginjo style. It boasts a pronounced melon aroma, complemented by notes of lime zest and green apple, as well as a soft, mochi-like mouthfeel.\n\nBrewed using domestically grown rice, the sake undergoes a slow, low-temperature fermentation process. Kokuryu's proprietary yeast strain imparts a refined aroma and clean flavour profile. The balanced nature of this sake reflects Kokuryu's brewing philosophy. "Crystal Dragon" represents a rare find in the daiginjo category, showcasing the brewery's skill in producing complex yet approachable sakes.`,
                brewery_detail: `Since 1804, Kokuryu has been brewing sake in the mountains of Fukui, guided by the principle that quality will garner support. Located near the Soto Zen temple Eihei-ji, between snowy peaks and the Sea of Japan, Kokuryu is one of the few remaining breweries in this ancient region. \n\nFrom growing rice to selecting special yeasts, the company maintains control over its production process. Kokuryu's commitment to excellence is evident in its small-batch approach, focusing on producing only the highest-quality sakes. This dedication to craftsmanship has allowed Kokuryu to preserve its heritage while continuing to produce superior sake.`,
                sake_type: `Daiginjo`,
                rice_type: `Gohyakumangoku`,
                rice_ratio: `50%`,
                alcohol: `15-16%`,
                SMV: `+4.5`,
                area: `Fukui`,
                buy: ``
            },
            {
                image: 'Kokuryu-Jungin',
                maker: 'KOKURYU SAKE BREWING CORPORATION',
                name: 'Kokuryu Jungin',
                alink: 'Kokuryu-Jungin',
                sake_detail: `Kokuryu Jungin is a Junmai Ginjo that highlights the natural flavors of Gohyakumangoku rice from Fukui. It's fresh and lively on the nose, with notes of cooked fruit such as pineapple, orange, and banana, along with nutty hints of coconut, walnut, and hazelnut, as well as umami and bread crust. On the palate, it is spicy, umami-rich, and creamy, balanced by a fresh acidity and a slightly bitter finish. \n\nThis sake is best served cool to room temperature (10-20°C). It can be enjoyed pure as an aperitif, or paired with aromatic, fatty, and spicy dishes.`,
                brewery_detail: `Since 1804, Kokuryu has been brewing sake in the mountains of Fukui, guided by the principle that quality will garner support. Located near the Soto Zen temple Eihei-ji, between snowy peaks and the Sea of Japan, Kokuryu is one of the few remaining breweries in this ancient region. \n\nFrom growing rice to selecting special yeasts, the company maintains control over its production process. Kokuryu's commitment to excellence is evident in its small-batch approach, focusing on producing only the highest-quality sakes. This dedication to craftsmanship has allowed Kokuryu to preserve its heritage while continuing to produce superior sake.`,
                sake_type: `Junmai Ginjo`,
                rice_type: `Gohyakumangoku`,
                rice_ratio: `55%`,
                alcohol: `15-16%`,
                SMV: `+4.5`,
                area: `Fukui`,
                buy: ``
            },
            {
                image: 'Shirayuki-Daiginjo-Hiyashibori',
                maker: 'KONISHI BREWING CO., LTD.',
                name: 'Shirayuki Daiginjo Hiyashibori',
                alink: 'Shirayuki-Daiginjo-Hiyashibori',
                sake_detail: `Daiginjo Hiyashibori, one of Konishi's premium sakes, is made with rice polished to 50% or less, qualifying it as Daiginjoshu. Its fruity aroma, best appreciated in a wine glass, results from single pasteurization (Namachozo). This well-balanced, medium-bodied sake is ideal before and during meals.\n\nThe sake has won multiple international awards, including:\nGrand Gold at The Fine Sake Awards Japan in 2014, 2019, 2021, and 2022 Gold at Monde Selection from 2016 to 2019 Silver at International Wine Challenge 2022`,
                brewery_detail: `Founded in 1550, Konishi Brewing is the oldest sake brewery continuously owned by the Konishi family. Located in Hyogo Prefecture, a key sake-producing region, the family began brewing sake in Itami as a side business to selling medicine. They accidentally discovered clear sake when ash was mistakenly added to a fresh batch.\n\nAs Itami's significance as a sake-brewing region grew in the late 16th and 17th centuries, especially after the capital moved to Edo (now Tokyo), the Konishi family launched a shipping company to transport their sake directly. Known for adopting new technologies, they remain popular today, with their flagship brand Shirayuki and the namesake Konishi brand introduced in 2012.`,
                sake_type: `Daiginjo`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `50%`,
                alcohol: `15-16%`,
                SMV: `+1`,
                area: `Hyogo`,
                buy: ``
            },
            {
                image: 'Shirayuki-Junmai-Daiginjo-Banzaimon',
                maker: 'KONISHI BREWING CO., LTD.',
                name: 'Shirayuki Junmai Daiginjo Banzaimon',
                alink: 'Shirayuki-Junmai-Daiginjo-Banzaimon',
                sake_detail: `"Banzaimon" is a premium sake from Itami, the birthplace of transparent sake. This Junmai Daiginjo is made using 100% Yamadanishiki, the highest-grade sake rice, with Hyogo-grown Yamadanishiki considered the finest. The rice is carefully polished and brewed using techniques refined over 470 years.\n\nThe sake boasts an elegant, fruity aroma with a smooth, velvety texture and rich depth. "Banzaimon" has won many awards, including a Double Gold Medal at the Milano Sake Challenge 2022, Silver and Bronze at the International Wine Challenge in 2017 and 2020 respectively, and Platinum at KURA MASTER 2022.`,
                brewery_detail: `Founded in 1550, Konishi Brewing is the oldest sake brewery continuously owned by the Konishi family. Located in Hyogo Prefecture, a key sake-producing region, the family began brewing sake in Itami as a side business to selling medicine. They accidentally discovered clear sake when ash was mistakenly added to a fresh batch.\n\nAs Itami's significance as a sake-brewing region grew in the late 16th and 17th centuries, especially after the capital moved to Edo (now Tokyo), the Konishi family launched a shipping company to transport their sake directly. Known for adopting new technologies, they remain popular today, with their flagship brand Shirayuki and the namesake Konishi brand introduced in 2012.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Yamadanishiki (Hyogo)`,
                rice_ratio: `35%`,
                alcohol: `16-17%`,
                SMV: `+2`,
                area: `Hyogo`,
                buy: ``
            },
            {
                image: 'Nokusho-Sign-70-Kaiwa',
                maker: 'MIYAKO NISHIKI SAKE BREWERY CO., LTD.',
                name: 'Nokusho Sign 70 Kaiwa',
                alink: 'Nokusho-Sign-70-Kaiwa',
                sake_detail: `The subtitle "Kaiwa" translates to "harmony," reflecting the natural chemistry that arises from balanced interactions. In this context, harmony signifies the intimate relationship between the earth's fruits, microorganisms, and the brewer. Through a long fermentation process, these elements converse and align, resulting in a delicious final product. \n\nThe sake's 70% polishing ratio facilitates the dissolution of rice and the activity of yeast, allowing the brewer to carefully oversee the mash. This sake is made from 100% specially grown rice, cultivated with ecological agricultural practices in Shimane Prefecture, resulting in a product that is both flavourful and respectful of nature.`,
                brewery_detail: `Founded in 1884 in the Iwami/Naka region, Miyako Nishiki Brewery primarily produces sake but aims to expand into other fermented beverages and foods. Situated where the Eno River meets the Sea of Japan, the brewery's location was formerly known as Tsunomura. \n\nThe sake, brewed in winter and pressed in spring, reaches peak flavour in autumn, coinciding with the vibrant foliage of nearby Mt. Takatsuno. This seasonal display of colours inspired the brewery's name, which translates to "Capital Brocade." Honouring the area's natural resources and traditional techniques, the brewers at Miyako Nishiki take pride in the yeasts used in their sake fermentation process.`,
                sake_type: `Junmai`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `70%`,
                alcohol: `16%`,
                SMV: `N/A`,
                area: `Shimane`,
                buy: ``
            },
            {
                image: 'Shimeharitsuru-Daiginjo-San',
                maker: 'MIYAO SAKE BREWING CO.,LTD.',
                name: 'Shime Haritsuru Daiginjo San',
                alink: 'Shime-Haritsuru-Daiginjo-San',
                sake_detail: `This limited edition sake is made from 100% Yamadanishiki rice, polished to 38% in-house, and water from a well fed by the salmon-rich Miomote River. The soft water contributes to the sake's mellow flavour. As a Daiginjo, it exhibits a refined fruity aroma typical of ginjo-style sakes, along with a balanced sweetness and crisp finish.\n\nThe sake's character can be described as "tanrei umakuchi" - rich yet light. It brings forth subtle notes of banana, and its crisp character shines alongside light fare such as whitefish, chicken, and salads with fruit and tomatoes.`,
                brewery_detail: `Founded in 1819, Miyao Sake Brewing is located in Murakami City, Niigata, renowned for its quality sake rice production. The brewery uses pristine water from a well fed by the Miomote River, originating in the Asahi mountain range. This soft, slightly sweet water is important in building the sake's flavour.\n\nShime Haritsuru's taste is best described as rich yet light, a result of the brewers' dedication to brewing supreme sake. The brewery emphasizes the use of top-tier ingredients and traditional methods in sake production. Miyao Shuzo focuses on customer satisfaction, with an aim to produce delicious sake by using outstanding rice and crystal clear water.`,
                sake_type: `Daiginjo`,
                rice_type: `Yamadanishiki (Hyogo)`,
                rice_ratio: `38%`,
                alcohol: `16%`,
                SMV: `+5`,
                area: `Niigata`,
                buy: ``
            },
            {
                image: 'Shimeharitsuru-Ginsen',
                maker: 'MIYAO SAKE BREWING CO.,LTD.',
                name: 'Shime Haritsuru Ginsen',
                alink: 'Shime-Haritsuru-Ginsen',
                sake_detail: `With its clear and elegant aroma, a rich flavour profile and a clean finish, this sake is brewed with rice polished in-house to 50% to meet the standards of Daiginjo sake production. \n\nUpon tasting, one notices a subtle ginjo aroma that doesn't overpower. The texture is smooth, with a refreshing taste and a crisp aftertaste for a well-rounded drinking experience. This versatile sake is a suitable accompaniment to meals prepared with grains, such as sushi. The sake's characteristics also complement dishes prepared with oil, as well as those that contain seafood or delicate meats. `,
                brewery_detail: `Founded in 1819, Miyao Sake Brewing is located in Murakami City, Niigata, renowned for its quality sake rice production. The brewery uses pristine water from a well fed by the Miomote River, originating in the Asahi mountain range. This soft, slightly sweet water is important in building the sake's flavour.\n\nShime Haritsuru's taste is best described as rich yet light, a result of the brewers' dedication to brewing supreme sake. The brewery emphasizes the use of top-tier ingredients and traditional methods in sake production. Miyao Shuzo focuses on customer satisfaction, with an aim to produce delicious sake by using outstanding rice and crystal clear water.`,
                sake_type: `Ginjo`,
                rice_type: `Yamadanishiki`,
                rice_ratio: `50%`,
                alcohol: `16%`,
                SMV: `+4.5`,
                area: `Niigata`,
                buy: ``
            },
            {
                image: 'Owari-Otokoyama-Daiginjo',
                maker: 'MORITA CO., LTD.',
                name: 'Owari Otokoyama Daiginjo',
                alink: 'Owari-Otokoyama-Daiginjo',
                sake_detail: `Morita Brewery has been brewing sake for 350 years in Aichi Prefecture's Chita region. Their daiginjo sake offers an accessible way to appreciate the pure flavours and aromas of sake. The brewing process uses spring water from the Nagara River and a gentle filtration method which preserves the sake's elegant aroma and light flavour. This technique results in a slight yellowish hue, allowing the sake's original character to shine through.\n\nBest served chilled or at room temperature, this light and sweet sake pairs well with seafood salad, carpaccio, butter soy sauce clams, teriyaki chicken, and karaage. `,
                brewery_detail: `Morita's sake brewery, established nearly 350 years ago, is located in Kosugaya on the Chita Peninsula, Aichi Prefecture. The region's climate, with warm springs and autumns followed by cold winter winds, provides ideal conditions for sake brewing, particularly during winter.\n\nMaster Brewer Hamajima, winner of eight consecutive Gold Prizes at the Annual Japan Sake Awards, brews a range of sakes known for their umami, clean finish, and breadth of flavour. His sakes find harmony in sweetness, sourness, saltiness, bitterness, astringency, and umami. With this balance of flavours, Morita's centuries-old brewing tradition continues to thrive, as the brewery produce sakes that reflect its heritage.`,
                sake_type: `Daiginjo`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `50%`,
                alcohol: `14-15%`,
                SMV: `±0`,
                area: `Aichi`,
                buy: ``
            },
            {
                image: 'Daiginjo-Ran',
                maker: 'MORITA CO., LTD.',
                name: 'Daiginjo Ran',
                alink: 'Daiginjo-Ran',
                sake_detail: `This daiginjo sake comes from a brewery with an impressive track record, having won gold awards for nine consecutive years since 2006. The sake was recognized at the International Wine Challenge 2022 as a recommended selection.\n\nChief Brewer Hamajima brewed this daiginjo with care, using select methods, water, and ingredients. The sake undergoes activated charcoal filtration for a light, refined finish, making it an excellent choice for those new to sake.\n\nIt emanates a gentle aroma and rich umami, making it suitable for everyday meals. Best served chilled or at room temperature, it pairs well with white fish sashimi, chilled tofu, yudofu, and seafood salad. `,
                brewery_detail: `Morita's sake brewery, established nearly 350 years ago, is located in Kosugaya on the Chita Peninsula, Aichi Prefecture. The region's climate, with warm springs and autumns followed by cold winter winds, provides ideal conditions for sake brewing, particularly during winter.\n\Master Brewer Hamajima, winner of eight consecutive Gold Prizes at the Annual Japan Sake Awards, brews a range of sakes known for their umami, clean finish, and breadth of flavour. His sakes find harmony in sweetness, sourness, saltiness, bitterness, astringency, and umami. With this balance of flavours, Morita's centuries-old brewing tradition continues to thrive, as the brewery produces sakes that reflect its heritage.`,
                sake_type: `Daiginjo`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `50%`,
                alcohol: `15-16%`,
                SMV: `+3`,
                area: `Aichi`,
                buy: ``
            },
            {
                image: 'Oujiman-33',
                maker: 'OUJIMAN, INC',
                name: 'Oujiman 33',
                alink: 'Oujiman-33',
                sake_detail: `Oujiman 33 is known for its smooth texture and delicate flavour, achieved through careful brewing techniques. It has a pleasing balance of sweetness and umami, making it a favourite among sake enthusiasts. \n\nThis sake often has fruity notes reminiscent of apple, pear or melon, with a clean, crisp finish. Oujiman 33 makes for a great accompaniment to a variety of dishes, especially light seafood such as sashimi or sushi. It also goes well with lightly seasoned chicken or vegetable dishes.`,
                brewery_detail: `Oujiman, Inc goes beyond traditional sake production, focusing on innovation in products, markets, and customer relationships. The company views manufacturing as a means of developing its workforce, with an aim to foster personal growth and contribute to societal progress.\n\nThe company's mission centers on quality, innovation, and trust. Its vision is to become a brand that takes pride in bringing satisfaction to consumers. By producing premium alcoholic beverages accessible to global consumers, Oujiman aspires to advance Japan's sake culture, food industry, and agriculture while increasing employee satisfaction both materially and emotionally.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Dewasansan`,
                rice_ratio: `33%`,
                alcohol: `15%`,
                SMV: `-2`,
                area: `Yamagata`,
                buy: ``
            },
            {
                image: 'Suigei-Tokubetsu-Junmai',
                maker: 'SUIGEI BREWERY CO. LTD',
                name: 'Suigei Tokubetsu Junmai',
                alink: 'Suigei-Tokubetsu-Junmai',
                sake_detail: `The sake is brewed using rice polished to 55%. The characteristics of the raw rice vary by region and variety, and are carefully identified and managed during preparation and mash. The sake is brewed slowly at low temperatures using Suigei's proprietary yeast and water from the Kagami River to create a strong koji. \n\nAfter pressing, the sake is stored in a low-temperature tank and bottled according to shipping volume. This pure rice sake combines the flavour of rice with a crisp aftertaste. It has a modest aroma and sourness that Suigei is known for, making it perfect for pairing with meals.`,
                brewery_detail: `In Kochi Prefecture, the hometown of Suigei brewery, there is a longstanding tradition of enjoying fresh food alongside alcohol. Suigei has embraced this custom, dedicating itself to creating sake that enhances the dining experience. The brewery's rich, dry sake is mildly aromatic, with a sharp finish and a umami-rich flavour. Ideal for both everyday meals and special occasions, Suigei's sake complements any dish. Whether shared at a casual dinner or a festive banquet, this sake enhances the flavours of every dish, allowing diners to enjoy it from the first sip to the last drop.`,
                sake_type: `Junmai Ginjo`,
                rice_type: `Japanese Sake Rice`,
                rice_ratio: `55%`,
                alcohol: `16%`,
                SMV: `+7`,
                area: `Kochi`,
                buy: ``
            },
            {
                image: 'Suigei-Junmai-Ginjo-Koiku-No54',
                maker: 'SUIGEI BREWERY CO. LTD',
                name: 'Suigei Junmai Ginjo Koiku No.54',
                alink: 'Suigei-Junmai-Ginjo-Koiku-No54',
                sake_detail: `Brewed with Kochi Prefecture's original Gin no Yume rice and distinctive KA-1 Kumamoto Yeast, this sake offers an exceptional umami-rich taste. Gin no Yume, developed for its superior brewing qualities, imparts deep, savory richness. The KA-1 Kumamoto Yeast ferments thoroughly and slowly at low temperatures, allowing precise control over fermentation. This results in smooth, fine-grained flavors with good aromatic acid content, fruity and floral notes, and a subtle citrusy undertone. \n\nThe sake's moderate aroma makes it an ideal companion for white fish sashimi, carpaccio, seafood hotpot, and tempura.`,
                brewery_detail: `In Kochi Prefecture, the hometown of Suigei brewery, there is a longstanding tradition of enjoying fresh food alongside alcohol. Suigei has embraced this custom, dedicating itself to creating sake that enhances the dining experience. The brewery's rich, dry sake is mildly aromatic, with a sharp finish and a umami-rich flavour. Ideal for both everyday meals and special occasions, Suigei's sake complements any dish. Whether shared at a casual dinner or a festive banquet, this sake enhances the flavours of every dish, allowing diners to enjoy it from the first sip to the last drop.`,
                sake_type: `Junmai Ginjo`,
                rice_type: `Ginnoyume (Kochi)`,
                rice_ratio: `50%`,
                alcohol: `16%`,
                SMV: `+7`,
                area: `Kochi`,
                buy: ``
            },
            {
                image: 'Tatenokawa-Shuryu-Junmai-Daiginjo',
                maker: 'TATENOKAWA INC',
                name: 'Tatenokawa Shuryu Junmai Daiginjo',
                alink: 'Tatenokawa-Shuryu-Junmai-Daiginjo',
                sake_detail: `This Junmai Daiginjo sake is a quintessential ginjo, polished down to 50% using 100% Hyogo-grown Yamada Nishiki rice. Designed as a central item in the Tatenokawa lineup, it boasts a rich, full-bodied flavour and a distinctive floral aroma that blooms upon pouring. \n\nThe use of Yamada Nishiki, the king of sake rice, delivers robust umami and a long, satisfying finish. Combining flavour, drinkability, and ease of enjoyment, this sake appeals to both beginners and connoisseurs. Aging under cool conditions draws out its mellow, refined character and overall complexity. This limited edition sake is produced in smaller quantities.`,
                brewery_detail: `Tatenokawa, founded in 1832, was named "Castle Brook" by the local Shonai Clan lord. Under the leadership of 6th generation president Sato Junpei, a young team aims to produce Japan's finest sake. In 2008, Sato made the bold decision to focus exclusively on Junmai Daiginjo, the highest grade of sake. \n\nThis strategy, aimed at creating more accessible and quality-focused sake, has rapidly boosted Tatenokawa's reputation. Their ambitious "100-year vision" is to brew Japan's top sake, a goal they've arguably achieved with their 1% polished sake, Komyo. Tatenokawa's enthusiasm, tenacity, and courage is showcased through their products.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Yamadanishiki`,
                rice_ratio: `50%`,
                alcohol: `15%`,
                SMV: `-1`,
                area: `Yamagata`,
                buy: ``
            },
            {
                image: 'Tatenokawa-Honryu-Junmai-Daiginjo',
                maker: 'TATENOKAWA INC',
                name: 'Tatenokawa Honryu Junmai Daiginjo',
                alink: 'Tatenokawa-Honryu-Junmai-Daiginjo',
                sake_detail: `This "Honryu Karakuchi" Junmai Daiginjo challenges the typical perception of dry sake. It boasts a rich, natural rice flavour, combining a refined ginjo aroma with bold umami and a sharp, refreshing finish. \n\nThis sake pairs excellently with dishes that highlight the natural flavours of ingredients, such as sashimi or sushi. Versatile in serving temperature, it's crisp and refreshing when chilled, while gentle warming to about 40°C brings out the umami of the rice. Experience the best of both worlds: cool for refreshment, warm for savory richness.`,
                brewery_detail: `Tatenokawa, founded in 1832, was named "Castle Brook" by the local Shonai Clan lord. Under the leadership of 6th generation president Sato Junpei, a young team aims to produce Japan's finest sake. In 2008, Sato made the bold decision to focus exclusively on Junmai Daiginjo, the highest grade of sake. \n\nThis strategy, aimed at creating more accessible and quality-focused sake, has rapidly boosted Tatenokawa's reputation. Their ambitious "100-year vision" is to brew Japan's top sake, a goal they've arguably achieved with their 1% polished sake, Komyo. Tatenokawa's enthusiasm, tenacity, and courage is showcased through their products.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Dewasansan`,
                rice_ratio: `50%`,
                alcohol: `15%`,
                SMV: `+8`,
                area: `Yamagata`,
                buy: ``
            },
            {
                image: 'Foo-Fighters-X-Tatenokawa-Junmai-Daiginjo-Hansho-Blue',
                maker: 'TATENOKAWA INC',
                name: 'Foo Fighters X Tatenokawa Junmai Daiginjo Hansho Blue',
                alink: 'Foo-Fighters-X-Tatenokawa-Junmai-Daiginjo-Hansho-Blue',
                sake_detail: `This Junmai Daiginjo sake, Hansho Blue, was made to celebrate the 25th anniversary of the Foo Fighters and the release of their 10th album, 'Medicine At Midnight'. Brewed while listening to the band's music, this sake is fermented at a very low temperature. \n\nHansho Blue uses 100% locally sourced Dewasansan rice from Yamagata, polished to 50%. Inspired by the pop side of Foo Fighters' sound, it boasts a gorgeous aroma, gentle mouthfeel, and light sweetness, best enjoyed after a long day.`,
                brewery_detail: `Tatenokawa, founded in 1832, was named "Castle Brook" by the local Shonai Clan lord. Under the leadership of 6th generation president Sato Junpei, a young team aims to produce Japan's finest sake. In 2008, Sato made the bold decision to focus exclusively on Junmai Daiginjo, the highest grade of sake. \n\nThis strategy, aimed at creating more accessible and quality-focused sake, has rapidly boosted Tatenokawa's reputation. Their ambitious "100-year vision" is to brew Japan's top sake, a goal they've arguably achieved with their 1% polished sake, Komyo. Tatenokawa's enthusiasm, tenacity, and courage is showcased through their products.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Dewasansan`,
                rice_ratio: `50%`,
                alcohol: `15%`,
                SMV: `-1`,
                area: `Yamagata`,
                buy: ``
            },
            {
                image: 'Foo-Fighters-X-Tatenokawa-Junmai-Daiginjo-Hansho-Silver',
                maker: 'TATENOKAWA INC',
                name: 'Foo Fighters X Tatenokawa Junmai Daiginjo Hansho Silver',
                alink: 'Foo-Fighters-X-Tatenokawa-Junmai-Daiginjo-Hansho-Silver',
                sake_detail: `This is the second variety of sake released to commemorate the Foo Fighters' 25th anniversary and their 10th album, "Medicine At Midnight." Brewed while listening to the band's music, this sake draws inspiration from their rock elements, resulting in a bold and expressive flavour with a sharp aftertaste and a clean finish that goes well with aged cheese and reduced sauces. \n\nIt has a well-structured mouthfeel and a dignified appearance. For the best experience, serve it chilled in a wine glass or warmed in a ceramic ochoko and tokkuri.`,
                brewery_detail: `Tatenokawa, founded in 1832, was named "Castle Brook" by the local Shonai Clan lord. Under the leadership of 6th generation president Sato Junpei, a young team aims to produce Japan's finest sake. In 2008, Sato made the bold decision to focus exclusively on Junmai Daiginjo, the highest grade of sake. \n\nThis strategy, aimed at creating more accessible and quality-focused sake, has rapidly boosted Tatenokawa's reputation. Their ambitious "100-year vision" is to brew Japan's top sake, a goal they've arguably achieved with their 1% polished sake, Komyo. Tatenokawa's enthusiasm, tenacity, and courage is showcased through their products.`,
                sake_type: `Junmai Daiginjo`,
                rice_type: `Omachi`,
                rice_ratio: `50%`,
                alcohol: `15%`,
                SMV: `+2`,
                area: `Yamagata`,
                buy: ``
            },
            {
                image: 'Tsukinoi-Hikoichi',
                maker: 'TSUKINOI SAKE BREWERY CO. LTD',
                name: 'Tsukinoi Hikoichi',
                alink: 'Tsukinoi-Hikoichi',
                sake_detail: `Hikoichi sake is deeply rooted in Oarai's local produce and the expertise of the townspeople. Named after the founder of Tsukinoi Sake Brewery in 1865, the brand was revived in 2014 to preserve the historic legacy of what was once a family-run brewery. \n\nThe Junmai "Chiyonishiki" is made from locally grown rice, infusing the sake with the region's essence. It delivers a rich umami aroma with a balanced sweetness and acidity. This versatile sake pairs well with seafood dishes and can be enjoyed throughout an evening. Hikoichi represents a continuation of tradition and a celebration of Oarai's terroir in every bottle.`,
                brewery_detail: `Founded in 1865 near the picturesque Oarai shore, Tsukinoi Brewery was originally named Matsumaeya. One mid-autumn evening, the owner was inspired by the moon's reflection on the waves, glittering gold and silver. He renamed the brewery Tsukinoi, meaning "the well of the moon." \n\nOarai, a thriving fishing port, has a tradition where fishermen drink a small cup of sake for good luck before departing and upon returning to celebrate their catch. Whether celebrating together or unwinding alone after a long day at sea, Tsukinoi sake has been integral to the fishermen's culture for 160 years.`,
                sake_type: `Junmai`,
                rice_type: `Chiyonishiki`,
                rice_ratio: `60%`,
                alcohol: `16%`,
                SMV: `+3`,
                area: `Ibaraki`,
                buy: ``
            },
            {
                image: 'Gikyo-Junmai-Ginjo-Genshu-60',
                maker: 'YAMACHU HONKE SHUZOU CO. LTD',
                name: 'Gikyo Junmai Ginjo Genshu 60%',
                alink: 'Gikyo-Junmai-Ginjo-Genshu-60',
                sake_detail: `This sake, similar to Gikyo Junmai-Ginjo Genshu 50%, is crafted using Grade A Yamada Nishiki rice, widely regarded as the pinnacle of sake rice varieties. The Genshu 60% iteration stands out with its pronounced character, delivering a more intense flavour profile, marked sharpness, and notable richness. \n\nIt's an ideal choice for sake enthusiasts seeking a robust sip with abundant umami notes. The higher polishing ratio of 60% allows more of the rice's natural qualities to shine through, resulting in a fuller-bodied sake.`,
                brewery_detail: `Located at the confluence of the Kiso River and Ise Bay in Aichi prefecture, Yamachu Honke is a small yet renowned brewery. With a rich heritage dating back to 1813, it has built a stellar reputation across Japan for their premium sake. Their flagship brand, Gikyo, translates to "chivalrous" and "generous," a name that perfectly encapsulates the brewery's ethos.\n\nThis philosophy was demonstrated in the 19th century when, despite rising rice prices, Yamachu Honke refused to increase the cost of their sake. This decision stemmed from a deep-rooted sense of duty to its customers, reflecting the true spirit of their brand name. Today, Yamachu Honke continues to uphold these values, producing sake that honours its long-standing tradition of quality and integrity.`,
                sake_type: `Junmai Ginjo`,
                rice_type: `Yamadanishiki`,
                rice_ratio: `60%`,
                alcohol: `16.8%`,
                SMV: `+5`,
                area: `Aichi`,
                buy: ``
            }
        ]
    }
    const allSakeList = template(value)
    console.log(allSakeList)
    $('#sake_list').html(allSakeList)

    const sakePage = template(value)
    console.log(sakePage)
    $('#sake_profile').html(sakePage)
}
