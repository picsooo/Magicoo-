const CONTACT={addr:'Cité Benamour N°3 bis, Ouled Yaïch, Blida 09015',map:'https://www.google.com/maps/search/?api=1&query=Cit%C3%A9+Benamour+Ouled+Yaich+Blida',conso:'0698 07 88 53',consoTel:'tel:+213698078853',com:'0540 66 87 25',comTel:'tel:+213540668725',mail:'farouzi98@gmail.com',ig:'https://www.instagram.com/magico.dz/',fb:'https://www.facebook.com/search/top?q=Magico%20muesli'};
const P={
classique:{name:'Classique',ar:'كلاسيكي',full:'Muesli d\'avoine Classique',line:'box',fmt:['400 g'],img:'img/classique-box.webp',camp:'img/camp-classique2.jpg',c1:'#9ad24a',c2:'#3f8a1f',ink:'#123a0c',slogan:'البساطة تربح',sloganFr:'La simplicité gagne',
 ing:'Flocons d\'avoine, miel de dattes et sésame.',claims:['Sans sucre ajouté','Riche en fibres et protéine végétale','Riche en magnésium et phosphore','Mention BIO sur le pack'],mood:['simple','matin'],
 desc:'La recette de base, celle qu\'on prend tous les matins : des flocons d\'avoine liés au miel de dattes, avec du sésame. Sans sucre ajouté, en boîte de 400 g.'},
extra:{name:'Extra',ar:'إكسترا',full:'Muesli d\'avoine Extra',line:'box',fmt:['400 g','1 kg'],img:'img/extra-box.webp',img2:'img/extra-sac.webp',camp:'img/camp-extra-box.jpg',camp2:'img/camp-extra.jpg',c1:'#ff5b8a',c2:'#c3164f',ink:'#fff',slogan:'أكثر من فطور',sloganFr:'Plus qu\'un petit-déjeuner',
 ing:'Flocons d\'avoine, amandes, raisins secs, banane, mélasse de dattes.',claims:['Sans sucre ajouté','100 % naturel','Riche en fibres, protéines, magnésium et phosphore'],mood:['fruit','matin'],
 desc:'Le muesli fruité de la gamme : amandes, raisins secs et banane sur une base d\'avoine au miel de dattes. En boîte de 400 g et en sachet zippé de 1 kg.'},
crunchy:{name:'Crunchy',ar:'كرانشي',full:'Muesli d\'avoine Crunchy',line:'box',fmt:['400 g','1 kg'],img:'img/crunchy-box.webp',camp:'img/camp-crunchy.jpg',camp2:'img/camp-combo.jpg',c1:'#b26bff',c2:'#5a1e8c',ink:'#fff',slogan:'كل لقمة فيها قرمشة',sloganFr:'Du croquant à chaque cuillère',
 ing:'Flocons d\'avoine, noix, cacahuète, noix de cajou, raisin sec, miel de dattes.',claims:['Sans sucre ajouté','Riche en fibres, protéines, magnésium et phosphore'],mood:['sport','croquant'],
 desc:'Pour ceux qui aiment que ça croque : noix, cacahuètes, noix de cajou et raisins secs. Disponible en boîte de 400 g et en sachet de 1 kg.'},
gourmand:{name:'Gourmand',ar:'غورمان',full:'Muesli d\'avoine Gourmand',line:'box',fmt:['400 g'],img:'img/gourmand-box.webp',camp:'img/camp-combo.jpg',c1:'#c97a4a',c2:'#5e2f17',ink:'#fff',slogan:'The perfect combo',sloganFr:'Le combo parfait',
 ing:'Flocons d\'avoine, chocolat au lait et chocolat blanc, amande grillée, riz soufflé, miel de dattes.',claims:['Sucre réduit','Riche en fibres et protéine végétale','Riche en magnésium et phosphore'],mood:['choco'],
 desc:'La version chocolat de la gamme : chocolat au lait, chocolat blanc, amande grillée et riz soufflé, avec un sucre réduit. En boîte de 400 g.'},
premium:{name:'Premium',ar:'بريميوم',full:'Muesli d\'avoine Premium',line:'box',fmt:['400 g'],img:'img/premium-box.webp',camp:'img/camp-premium.jpg',c1:'#2f8a6c',c2:'#103a2e',ink:'#fff',slogan:'تغذية تناسب هدفك',sloganFr:'Une nutrition qui suit ton objectif',
 ing:'Flocons d\'avoine, noix de cajou, cacahuète, noix, raisin sec, céréales soufflées, miel de sésame.',claims:['Sans sucre ajouté','Riche en fibres et protéine végétale','Riche en magnésium et phosphore'],mood:['sport'],
 desc:'Le mélange le plus riche en fruits à coque de la gamme boîte, pensé pour les sportifs qui veulent un petit-déjeuner complet. En boîte de 400 g.'},
dark:{name:'Dark',ar:'دارك',full:'Muesli d\'avoine Dark',line:'sac',fmt:['1 kg'],img:'img/dark-sac.webp',camp:'img/camp-dark.jpg',c1:'#4a4a52',c2:'#0e0e12',ink:'#fff',slogan:'الذوق الأقوى',sloganFr:'Le goût le plus fort',
 ing:'Flocons d\'avoine, cacao, chocolat noir, noix, noix de coco, amande grillée, miel de dattes.',claims:['Sans sucres ajoutés','Riche en fibres, protéines, magnésium et phosphore'],mood:['choco','sport'],
 desc:'Le sachet 1 kg pour les amateurs de chocolat noir : cacao, chocolat noir, noix, noix de coco et amande grillée.'},
super:{name:'Super',ar:'سوبر',full:'Muesli d\'avoine Super',line:'sac',fmt:['1 kg'],img:'img/super-sac.webp',camp:'img/camp-super.jpg',c1:'#ffc53d',c2:'#b5740a',ink:'#2a1700',slogan:'أصل النتائج هو الاستمرارية',sloganFr:'Les résultats viennent de la régularité',
 ing:'Flocons d\'avoine, gingembre, cannelle, graines de lin, noisette, cacahuète, raisin sec, noix de cajou, miel de dattes.',claims:['Sans sucres ajoutés','Riche en fibres, protéines, magnésium et phosphore'],mood:['sport','epice'],
 desc:'La recette épicée : gingembre, cannelle et graines de lin, avec noisettes, cacahuètes et noix de cajou. En sachet zippé de 1 kg.'},
peanut:{name:'Peanut Butter',ar:'زبدة الفول السوداني',full:'Peanut Butter Magico',line:'pot',fmt:['500 g'],img:'img/peanut.jpg',photo:true,camp:'img/camp-peanut.jpg',c1:'#e9b26b',c2:'#1d4fb8',ink:'#fff',slogan:'ملعقة واحدة تكفي',sloganFr:'Une cuillère suffit',
 ing:'Cacahuètes.',claims:['0 % huile de palme','0 % sucre ajouté','100 % naturel'],mood:['sport'],
 desc:'Le beurre de cacahuète Magico en pot de 500 g : sans huile de palme et sans sucre ajouté. Une cuillère dans le muesli suffit pour un petit-déjeuner plus complet.'}
};
const ORDER=['classique','extra','crunchy','gourmand','premium','dark','super','peanut'];
const LINES=[['all','Toute la gamme'],['box','Boîtes 400 g'],['sac','Sachets 1 kg'],['pot','Peanut butter']];
const MOODS=[['matin','☀️','Un petit-déj simple'],['sport','💪','Je m\'entraîne'],['choco','🍫','Team chocolat'],['fruit','🍌','Plutôt fruité'],['croquant','🥜','Du croquant'],['epice','🌿','Épicé et original']];
const PRIZES=[
 {t:'Cartable Magico',e:'🎒',c:'#1d4fb8'},{t:'Boîte de muesli 400 g',e:'📦',c:'#ff5b8a'},{t:'Retente ta chance',e:'🔁',c:'#e9eef9',ink:'#1d4fb8',lose:1},
 {t:'Sachet muesli 1 kg',e:'🛍️',c:'#9ad24a'},{t:'Pot de peanut butter',e:'🥜',c:'#e9b26b'},{t:'Gourde Magico',e:'🥤',c:'#b26bff'},
 {t:'Retente ta chance',e:'🔁',c:'#e9eef9',ink:'#1d4fb8',lose:1},{t:'Pack 3 boîtes',e:'🎁',c:'#ffc53d'}];
const QUIZ=[
 {q:'Quelle recette Magico contient du chocolat noir et de la noix de coco ?',a:['Classique','Dark','Extra'],ok:1},
 {q:'Avec quoi est sucré le muesli Classique ?',a:['Du sucre blanc','Du miel de dattes','Du sirop de glucose'],ok:1},
 {q:'Quel est le poids d\'un sachet zippé Magico ?',a:['500 g','750 g','1 kg'],ok:2},
 {q:'Quelle recette mélange gingembre, cannelle et graines de lin ?',a:['Super','Gourmand','Crunchy'],ok:0},
 {q:'Le peanut butter Magico contient…',a:['De l\'huile de palme','0 % huile de palme','Du chocolat'],ok:1},
 {q:'Où est fabriqué Magico ?',a:['À Blida','À Oran','À l\'étranger'],ok:0}];
