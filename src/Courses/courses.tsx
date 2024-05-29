export interface CourseItem {
    id: number;
    duration: number;
    price: number;
    tag: string;
    title: string;
};

const courses: CourseItem[] = [
    {
        id: 0,
        duration: 40,
        price: 5000,
        tag: "Специальные требования промышленной безопасности в химической, нефтехимической и нефтегазоперерабатывающей промышленности – Б1",
        title: "Общие требования промышленной безопасности. Основы промышленной безопасности (А.1)",
    },
    {
        id: 1,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в химической, нефтехимической и нефтегазоперерабатывающей промышленности – Б1",
        title: "Требования промышленной безопасности при эксплуатации химически опасных производственных объектов» (Б.1.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 2,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в химической, нефтехимической и нефтегазоперерабатывающей промышленности – Б1",
        title: "Требования промышленной безопасности при эксплуатации объектов нефтепереработки» (Б.1.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 20,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в нефтяной и газовой промышленности – Б2",
        title: "Требования промышленной безопасности при эксплуатации объектов нефтяной и газовой промышленности» (Б.2.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 21,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в нефтяной и газовой промышленности – Б2",
        title: "Требования промышленной безопасности при проектировании объектов нефтегазодобычи» (Б.2.3) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 22,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в нефтяной и газовой промышленности – Б2",
        title: "Требования промышленной безопасности при бурении нефтяных и газовых скважин» (Б.2.4) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 23,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в нефтяной и газовой промышленности – Б2",
        title: "Требования промышленной безопасности при эксплуатации магистральных нефтепроводов и нефтепродуктопроводов» (Б.2.7) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 24,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в нефтяной и газовой промышленности – Б2",
        title: "Требования промышленной безопасности при проектировании, строительстве, реконструкции и капитальном ремонте объектов нефтяной и газовой промышленности» (Б.2.13) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 30,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в металлургической промышленности – Б3",
        title: "Требования промышленной безопасности при литейном производстве черных и цветных металлов» (Б.3.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 31,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности в металлургической промышленности – Б3",
        title: "Требования промышленной безопасности при медно-никелевом производстве» (Б.3.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 40,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах газораспределения и газопотребления – Б7",
        title: "Требования промышленной безопасности при эксплуатации систем газораспределения и газопотребления» (Б.7.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 41,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах газораспределения и газопотребления – Б7",
        title: "Требования промышленной безопасности при эксплуатации объектов, использующих сжиженные углеводородные газы» (Б.7.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 42,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах газораспределения и газопотребления – Б7",
        title: "Требования промышленной безопасности при проектировании, строительстве, реконструкции, техническом перевооружении и капитальном ремонте сетей газораспределения и газопотребления» (Б.7.3) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 44,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах газораспределения и газопотребления – Б7",
        title: "Требования промышленной безопасности при эксплуатации автомобильных заправочных станций сжиженного углеводородного газа» (Б.7.4) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 50,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности при эксплуатации котлов (паровых, водогрейных, с органическими и неорганическими теплоносителями) на опасных производственных объектах» (Б.8.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 51,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности при эксплуатации  трубопроводов пара и горячей воды на опасных производственных объектах» (Б.8.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 52,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности при эксплуатации сосудов, работающих под давлением, на опасных производственных объектах» (Б.8.3) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 53,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности при эксплуатации медицинских и водолазных барокамер на опасных производственных объектах» (Б.8.4) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 54,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности при наполнении, техническом освидетельствовании и ремонте баллонов для хранения и транспортирования сжатых, сжиженных и растворенных под давлением газов, применяемых на опасных производственных объектах» (Б.8.5) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 55,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к оборудованию, работающему под давлением – Б8",
        title: "Требования промышленной безопасности к деятельности, связанной с проектированием, строительством, реконструкцией, капитальным ремонтом и техническим перевооружением опасных производственных объектов, монтажом (демонтажем), наладкой, обслуживанием и ремонтом (реконструкцией) оборудования, работающего под избыточным давлением, применяемого на опасных производственных объектах» (Б.8.6) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 60,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к подъемным сооружениям –  Б9",
        title: "Требования промышленной безопасности при эксплуатации опасных производственных объектов, на которых применяются подъемные сооружения, предназначенные для подъема и перемещения грузов» (Б.9.3) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 61,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к подъемным сооружениям –  Б9",
        title: "Требования промышленной безопасности при эксплуатации опасных производственных объектов, на которых применяются подъемные сооружения, предназначенные для подъема и транспортировки людей» (Б.9.4) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 62,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности к подъемным сооружениям –  Б9",
        title: "Требования промышленной безопасности при монтаже, наладке, ремонте, реконструкции или модернизации подъемных сооружений в процессе эксплуатации опасных производственных объектов» (Б.9.5) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 70,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности при транспортировании опасных веществ –  Б10",
        title: "Требования промышленной безопасности при транспортировании опасных веществ железнодорожным транспортом» (Б.10.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 71,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности при транспортировании опасных веществ –  Б10",
        title: "Требования промышленной безопасности при транспортировании опасных веществ автомобильным транспортом» (Б.10.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 81,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах хранения и переработки растительного сырья –  Б11",
        title: "Требования промышленной безопасности при строительстве, эксплуатации, консервации и ликвидации объектов хранения и переработки растительного сырья» (Б.11.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 82,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах хранения и переработки растительного сырья –  Б11",
        title: "Требования промышленной безопасности при строительстве, эксплуатации, консервации и ликвидации объектов хранения и переработки растительного сырья» (Б.11.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 83,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах хранения и переработки растительного сырья –  Б11",
        title: "Требования промышленной безопасности при разработке проектной, конструкторской и иной документации для опасных объектов хранения и переработки растительного сырья» (Б.11.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 84,
        duration: 24,
        price: 13000,
        tag: "Специальные требования промышленной безопасности на объектах хранения и переработки растительного сырья –  Б11",
        title: "Требования промышленной безопасности при изготовлении, монтаже, наладке, ремонте, техническом освидетельствовании, реконструкции и эксплуатации технических устройств (машин и оборудования), применяемых на объектах хранения и переработки растительного сырья» (Б.11.3) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 90,
        duration: 24,
        price: 13000,
        tag: "Специальные требования к порядку работы в электроустановках потребителей - Г1",
        title: "Подготовка руководителей и специалистов организаций, осуществляющих эксплуатацию электроустановок» (Г.1.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 91,
        duration: 24,
        price: 13000,
        tag: "Специальные требования к порядку работы на тепловых энергоустановках и тепловых сетях - Г2",
        title: "Подготовка руководителей и специалистов организаций, осуществляющих эксплуатацию тепловых энергоустановок и тепловых сетей» (Г.2.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 92,
        duration: 24,
        price: 13000,
        tag: "Специальные Требования к эксплуатации электрических станций и сетей - Г3",
        title: "Подготовка руководителей и специалистов организаций, эксплуатирующих тепловые электрические станции» (Г.3.1) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 93,
        duration: 24,
        price: 13000,
        tag: "Специальные Требования к эксплуатации электрических станций и сетей - Г3",
        title: "Подготовка руководителей и специалистов организаций, эксплуатирующих электрические сети» (Г.3.2) + Основы промышленной безопасности (А.1)"
    },
    {
        id: 94,
        duration: 24,
        price: 8000,
        tag: "Специальные Требования к эксплуатации электрических станций и сетей - Г3",
        title: "Подготовка руководителей и специалистов объектов, использующих  сжиженные углеводородные газы (СУГ)"
    },
    {
        id: 100,
        duration: 40,
        price: 5000,
        tag: "Оборудование, не подконтрольное Ростехнадзору",
        title: "Подготовка руководителей и специалистов, ответственных за исправное состояние и безопасную эксплуатацию сосудов, работающих под давлением"
    },
   /*  {
        id: 101,
        duration: 40,
        price: 5000,
        tag: "Оборудование, не подконтрольное Ростехнадзору",
        title: "Подготовка  руководителей и специалистов, ЧАК, ответственных за безопасное производство работ кранами – ГПМ"
    }, */
    {
        id: 102,
        duration: 40,
        price: 5000,
        tag: "Оборудование, не подконтрольное Ростехнадзору",
        title: "Безопасная эксплуатация лифтов"
    },
    {
        id: 104,
        duration: 40,
        price: 5000,
        tag: "Оборудование, не подконтрольное Ростехнадзору",
        title: "Безопасная эксплуатация дымовых и вентиляционных труб"
    },
    {
        id: 110,
        duration: 48,
        price: 6000,
        tag: "Газовая инспекция",
        title: "Оператор котельной: Оператор газового оборудования котельных установок (Первичная аттестация)"
    },
    {
        id: 111,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Оператор котельной: Оператор газового оборудования котельных установок (Повторная аттестация знаний без выдачи удостоверения)"
    },
    {
        id: 112,
        duration: 48,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Оператор котельной: Оператор газового оборудования котельных установок» (Повторная аттестция с выдачей удостоверения)"
    },
    {
        id: 113,
        duration: 48,
        price: 6000,
        tag: "Газовая инспекция",
        title: "Оператор печей, работающих на природном газе (Первичная аттестация)"
    },
    {
        id: 114,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Оператор печей, работающих на природном газе (Повторная аттестция без выдачи удостоверения)"
    },
    {
        id: 115,
        duration: 48,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Оператор печей, работающих на природном газе (Повторная аттестция с выдачей удостоверения)"
    },
    {
        id: 116,
        duration: 32,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Персонал, экплуатирующий баллону сжиженного углевородного газа (СУГ): газорезчик, пайщик, газозаправщик, наполнитель баллонов (Первичная аттестация)"
    },
    {
        id: 117,
        duration: 32,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Персонал, обслуживающий объекты с использованием сжиженного газа автомобильных газозаправочных станций (АГЗС) (Первичная аттестация)"
    },
    {
        id: 118,
        duration: 48,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования без права выполнения газоопасных работ (Первичная аттестация)"
    },
    {
        id: 119,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования» без права выполнения газоопасных работ (Повторная аттестция без выдачи удостоверения)"
    },
    {
        id: 120,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования» без права выполнения газоопасных работ (Повторная аттестция с выдачей удостоверения)"
    },
    {
        id: 121,
        duration: 48,
        price: 8000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования с правом выполнения газоопасных работ (Первичная аттестация)"
    },
    {
        id: 122,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования» с правом выполнения газоопасных работ (Первичная аттестация)"
    },
    {
        id: 123,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Слесарь по эксплуатации и ремонту газового оборудования» с правом выполнения газоопасных работ (Повторная аттестция с выдачей удостоверения)"
    },
    {
        id: 124,
        duration: 48,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Слесарь-обходчик (Первичная аттестация)"
    },
    {
        id: 125,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Слесарь-обходчик (Повторная аттестация)"
    },
    {
        id: 126,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Слесарь-обходчик (Повторная аттестция с выдачей удостоверения)"
    },
    {
        id: 127,
        duration: 48,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Слесарь КИПиА газового оборудования промышленных предприятий» (Первичная аттестация)"
    },
    {
        id: 128,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Слесарь КИПиА газового оборудования промышленных предприятий» (Повторная аттестция без выдачи удостоверения)"
    },
    {
        id: 129,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Слесарь КИПиА газового оборудования промышленных предприятий» (Повторная аттестция с выдачей удостоверения)"
    },


    {
        id: 130,
        duration: 48,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Персонал, обслуживающий газовые горелки технологических установок, работающих на природном газе» (Первичная аттестация))"
    },
    {
        id: 131,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Персонал, обслуживающий газовые горелки технологических установок, работающих на природном газе» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 132,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Персонал, обслуживающий газовые горелки технологических установок, работающих на природном газе» (Повторная аттестация с выдачей удостоверения)"
    },
    {
        id: 133,
        duration: 48,
        price: 5000,
        tag: "Газовая инспекция",
        title: "Персонал  по обслуживанию газифицированных установок (печей), работающих на природном газе» (Первичная аттестация)"
    },
    {
        id: 134,
        duration: 32,
        price: 3000,
        tag: "Газовая инспекция",
        title: "Персонал  по обслуживанию газифицированных установок (печей), работающих на природном газе» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 135,
        duration: 32,
        price: 4000,
        tag: "Газовая инспекция",
        title: "Персонал  по обслуживанию газифицированных установок (печей), работающих на природном газе» (Повторная аттестация с выдачей удостоверения)"
    },
    //Котлонадзор
    {
        id: 140,
        duration: 72,
        price: 6000,
        tag: "Котлонадзор",
        title: "Оператор котельных установок» (пПервичная аттестация)"
    },
    {
        id: 141,
        duration: 48,
        price: 3000,
        tag: "Котлонадзор",
        title: "Оператор котельных установок» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 142,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Оператор котельных установок» (Повторная аттестация с выдачей удостоверения удостоверения)"
    },
    {
        id: 143,
        duration: 72,
        price: 5000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту котельного оборудования» (Первичная аттестация)"
    },
    {
        id: 144,
        duration: 48,
        price: 3000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту котельного оборудования» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 145,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту котельного оборудования» (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 146,
        duration: 16,
        price: 5000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий трубопроводы пара и горячей воды» (Первичная аттестация)"
    },
    {
        id: 147,
        duration: 16,
        price: 3000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий трубопроводы пара и горячей воды» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 148,
        duration: 16,
        price: 4000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий трубопроводы пара и горячей воды» (Повторная аттестация с выдачей удостоверения)"
    },
    {
        id: 149,
        duration: 40,
        price: 4000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды, работающие под давлением» (Первичная аттестация)"
    },
    {
        id: 150,
        duration: 32,
        price: 2000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды, работающие под давлением» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 151,
        duration: 32,
        price: 2500,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды, работающие под давлением» (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 152,
        duration: 40,
        price: 4000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды (паровые стерилизаторы), работающие под давлением» (Первичная аттестация)"
    },
    {
        id: 153,
        duration: 32,
        price: 2000,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды (паровые стерилизаторы), работающие под давлением» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 154,
        duration: 32,
        price: 2500,
        tag: "Котлонадзор",
        title: "Персонал, обслуживающий сосуды (паровые стерилизаторы), работающие под давлением» (Повторная аттестация с выдачей удостоверения)"
    },
    {
        id: 155,
        duration: 56,
        price: 5000,
        tag: "Котлонадзор",
        title: "Машинист компрессорных установок (Первичная аттестация)"
    },
    {
        id: 156,
        duration: 48,
        price: 3000,
        tag: "Котлонадзор",
        title: "Машинист компрессорных установок (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 157,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Машинист компрессорных установок (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 158,
        duration: 56,
        price: 5000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту насосно-компрессорного оборудования» (Первичная аттестация)"
    },
    {
        id: 159,
        duration: 48,
        price: 4500,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту насосно-компрессорного оборудования» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 160,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту насосно-компрессорного оборудования» (Повторная аттестация с выдачей удостоверения)"
    },
    {
        id: 161,
        duration: 62,
        price: 4000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту систем вентиляции» (Первичная аттестация)"
    },
    {
        id: 162,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту систем вентиляции» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 163,
        duration: 48,
        price: 4000,
        tag: "Котлонадзор",
        title: "Слесарь по обслуживанию и ремонту систем вентиляции» (Повторная аттестация с выдачей удостоверения)"
    },
    {
        id: 164,
        duration: 56,
        price: 6000,
        tag: "Котлонадзор",
        title: "Аппаратчик химводоочистки (Первичная аттестация)"
    },
    {
        id: 165,
        duration: 32,
        price: 3000,
        tag: "Котлонадзор",
        title: "Аппаратчик химводоочистки (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 166,
        duration: 32,
        price: 4000,
        tag: "Котлонадзор",
        title: "Аппаратчик химводоочистки (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 167,
        duration: 64,
        price: 6000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист стрелового крана» (Первичная аттестация)"
    },
    {
        id: 168,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист стрелового крана» (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 169,
        duration: 64,
        price: 6000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист  мостовых, козловых кранов (Первичная аттестация)"
    },
    {
        id: 170,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист  мостовых, козловых кранов (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 171,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист крана, управляемого с пола, с правом строповки (Первичная аттестация)"
    },
    {
        id: 172,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист крана, управляемого с пола, с правом строповки (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 173,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Рабочий люльки-подъемника (вышки) (Первичная аттестация)"
    },
    {
        id: 174,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Рабочий люльки-подъемника (вышки) (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 175,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист крана-манипулятора (Первичная аттестация)"
    },
    {
        id: 176,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист крана-манипулятора (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 177,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист строительного подъемника (Первичная аттестация)"
    },
    {
        id: 178,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Машинист строительного подъемника (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 179,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Электромонтер по ремонту и обслуживанию грузоподъемных кранов (Первичная аттестация)"
    },
    {
        id: 180,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Электромонтер по ремонту и обслуживанию грузоподъемных кранов (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 181,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Слесарь по ремонту и обслуживанию грузоподъемных кранов (Первичная аттестация)"
    },
    {
        id: 182,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Слесарь по ремонту и обслуживанию грузоподъемных кранов (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 183,
        duration: 64,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Стропальщик (Первичная аттестация)"
    },
    {
        id: 184,
        duration: 48,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Стропальщик (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 185,
        duration: 38,
        price: 3000,
        tag: "Грузоподъемные механизмы",
        title: "Такелажник"
    },
    {
        id: 186,
        duration: 56,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Лифтёр"
    },
    {
        id: 187,
        duration: 56,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Оператор по диспетчерскому обслуживанию лифтов"
    },
    {
        id: 188,
        duration: 56,
        price: 5000,
        tag: "Грузоподъемные механизмы",
        title: "Оператор по диспетчерскому обслуживанию лифтов"
    },

    {
        id: 200,
        duration: 48,
        price: 5000,
        tag: "Сварщики, газорезчики",
        title: "Электрогазосварщик (Первичная аттестация)"
    },
    {
        id: 201,
        duration: 32,
        price: 3000,
        tag: "Сварщики, газорезчики",
        title: "Электрогазосварщик (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 202,
        duration: 48,
        price: 6000,
        tag: "Сварщики, газорезчики",
        title: "Электросварщик (Первичная аттестация)"
    },
    {
        id: 203,
        duration: 32,
        price: 3000,
        tag: "Сварщики, газорезчики",
        title: "Электросварщик (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 204,
        duration: 48,
        price: 5000,
        tag: "Сварщики, газорезчики",
        title: "Газорезчик (Первичная аттестация)"
    },
    {
        id: 205,
        duration: 32,
        price: 3000,
        tag: "Сварщики, газорезчики",
        title: "Газорезчик (Повторная аттестация без выдачи удостоверения)"
    },

    {
        id: 206,
        duration: 48,
        price: 5000,
        tag: "Плавильщики, литейщики",
        title: "Литейщик цветных металлов (Первичная аттестация)"
    },
    {
        id: 207,
        duration: 32,
        price: 3000,
        tag: "Плавильщики, литейщики",
        title: "Литейщик цветных металлов (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 208,
        duration: 48,
        price: 5000,
        tag: "Плавильщики, литейщики",
        title: "«Плавильщик (Первичная аттестация)"
    },
    {
        id: 209,
        duration: 32,
        price: 3000,
        tag: "Плавильщики, литейщики",
        title: "Плавильщик (Повторная аттестация без выдачи удостоверения)"
    },

    {
        id: 210,
        duration: 48,
        price: 6000,
        tag: "Слесари",
        title: "Слесарь-сантехник 2-6 разрядов (Первичная аттестация)"
    },
    {
        id: 211,
        duration: 32,
        price: 3000,
        tag: "Слесари",
        title: "Слесарь-сантехник 2-6 разрядов (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 212,
        duration: 32,
        price: 4000,
        tag: "Слесари",
        title: "Слесарь-сантехник 2-6 разрядов (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 220,
        duration: 40,
        price: 5000,
        tag: "Правила технической эксплуатации электроустановок потребителей",
        title: "Нормы и правила работы в электроустановках потребителей электрической энергии, подготовка документации для обучения по проверке знаний в комиссии Ростехнадзора"
    },

    {
        id: 230,
        duration: 40,
        price: 6000,
        tag: "Правила технической эксплуатация тепловых энергоустановок, теплопотребляющих установок и тепловых сетей потребителей",
        title: "Нормы и правила работы в тепловых энергоустановках для персонала (Первичная аттестация)"
    },
    {
        id: 231,
        duration: 40,
        price: 3000,
        tag: "Правила технической эксплуатация тепловых энергоустановок, теплопотребляющих установок и тепловых сетей потребителей",
        title: "Нормы и правила работы в тепловых энергоустановках для персонала (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 232,
        duration: 40,
        price: 4000,
        tag: "Правила технической эксплуатация тепловых энергоустановок, теплопотребляющих установок и тепловых сетей потребителей",
        title: "Нормы и правила работы в тепловых энергоустановках для персонала (Повторная аттестация с выдачей удостоверения)"
    },

    {
        id: 240,
        duration: 40,
        price: 5000,
        tag: "Охрана труда (руководители и работники)",
        title: "Охрана труда при работе на высоте для рабочих"
    },
    {
        id: 241,
        duration: 40,
        price: 8000,
        tag: "Охрана труда (руководители и работники)",
        title: "Охрана труда при работе на высоте для руководителей"
    },
    {
        id: 242,
        duration: 40,
        price: 6000,
        tag: "Охрана труда (руководители и работники)",
        title: "Обучение работодателей и работников вопросам охраны труда"
    },
    {
        id: 243,
        duration: 10,
        price: 4000,
        tag: "Охрана труда (руководители и работники)",
        title: "Общие вопросы охраны труда и функционирования системы управления охраны труда"
    },
    {
        id: 244,
        duration: 10,
        price: 4000,
        tag: "Охрана труда (руководители и работники)",
        title: "Безопасные методы и приемы выполнения работ при воздействии вредных и (или) опасных факторов, источников опасности, идентифицированных в рамках специальной оценки условий труда и оценки профессиональных рисков"
    },
    {
        id: 245,
        duration: 10,
        price: 4000,
        tag: "Охрана труда (руководители и работники)",
        title: "Безопасные методы и приемы выполнения работ повышенной опасности, к которым предъявляются дополнительные требования в соответствии с нормативными правовыми актами, содержащими государственные нормативные требования охраны трудаа"
    },
    {
        id: 246,
        duration: 10,
        price: 2000,
        tag: "Охрана труда (руководители и работники)",
        title: "Оказание первой доврачебной помощи пострадавшим на производстве"
    },

    {
        id: 250,
        duration: 16,
        price: 3000,
        tag: "Управление государственной противопожарной службы",
        title: "Пожарная безопасность для рабочих"
    },
    {
        id: 251,
        duration: 32,
        price: 6000,
        tag: "Управление государственной противопожарной службы",
        title: "Пожарная безопасность для руководителей"
    },

    {
        id: 260,
        duration: 36,
        price: 5000,
        tag: "Автомобильная заправочная станция",
        title: "Оператор АЗС (Первичная аттестация)"
    },
    {
        id: 261,
        duration: 16,
        price: 3000,
        tag: "Автомобильная заправочная станцияы",
        title: "Оператор АЗС (Повторная аттестация без выдачи удостоверения)"
    },
    {
        id: 262,
        duration: 36,
        price: 8000,
        tag: "Автомобильная заправочная станция",
        title: "Подготовка руководителей и специалистов объектов АЗС"
    },
    

  


    
];
export default courses;
