const productList = [{ "bankName": "Газпромбанк", "investName": "Ваш успех", "currency": "RUB", "incomeType": 6.22, "sumMin": 50000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": false },
{ "bankName": "Кредит Европа Банк", "investName": "Оптимальный на 2 года", "currency": "RUB", "incomeType": 6.45, "sumMin": 100000, "sumMax": Infinity, "termMin": 24, "termMax": 24, "canDeposit": false },
{ "bankName": "Банк Зенит", "investName": "Праздничный 500+", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": Infinity, "termMin": 17, "termMax": 17, "canDeposit": false },
{ "bankName": "Еврофинанс Моснарбанк", "investName": "Классический", "currency": "RUB", "incomeType": 6.95, "sumMin": 30000, "sumMax": Infinity, "termMin": 12, "termMax": 24, "canDeposit": false },
{ "bankName": "Джей энд Ти Банк", "investName": "Магнус-Онлайн", "currency": "RUB", "incomeType": 6.8, "sumMin": 100000, "sumMax": Infinity, "termMin": 6, "termMax": 6, "canDeposit": false },
{ "bankName": "МТС Банк", "investName": "В вашу пользу", "currency": "RUB", "incomeType": 6.75, "sumMin": 50000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Эс-Би-Ай Банк", "investName": "Свои правила Онлайн", "currency": "RUB", "incomeType": 6.7, "sumMin": 30000, "sumMax": 30000000, "termMin": 24, "termMax": 24, "canDeposit": false },
{ "bankName": "Банк Уралсиб", "investName": "Прогноз отличный", "currency": "RUB", "incomeType": 6.7, "sumMin": 100000, "sumMax": Infinity, "termMin": 37, "termMax": 37, "canDeposit": false },
{ "bankName": "Инвестторгбанк", "investName": "ИТБ-Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": Infinity, "termMin": 37, "termMax": 37, "canDeposit": false },
{ "bankName": "Транскапиталбанк", "investName": "ТКБ.Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": Infinity, "termMin": 37, "termMax": 37, "canDeposit": false },
{ "bankName": "Совкомбанк", "investName": "Зимний праздник с Халвой", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": Infinity, "termMin": 2, "termMax": 2, "canDeposit": true },
{ "bankName": "Агророс", "investName": "Медовый месяц", "currency": "RUB", "incomeType": 5.51, "sumMin": 20000, "sumMax": Infinity, "termMin": 1, "termMax": 1, "canDeposit": true },
{ "bankName": "Росдорбанк", "investName": "Онлайн-1", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": 150000000, "termMin": 1, "termMax": 1, "canDeposit": true },
{ "bankName": "Национальный Стандарт", "investName": "Сберегательный стандарт", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": Infinity, "termMin": 1, "termMax": 3, "canDeposit": true },
{ "bankName": "Россия", "investName": "Морозные узоры", "currency": "RUB", "incomeType": 5, "sumMin": 100000, "sumMax": Infinity, "termMin": 1, "termMax": 1, "canDeposit": true },
{ "bankName": "Кузнецкий Мост", "investName": "Накопительный", "currency": "RUB", "incomeType": 4.85, "sumMin": 50000, "sumMax": Infinity, "termMin": 1, "termMax": 3, "canDeposit": true },
{ "bankName": "Тексбанк", "investName": "Универсальный", "currency": "RUB", "incomeType": 4.6, "sumMin": 10000, "sumMax": Infinity, "termMin": 1, "termMax": 1, "canDeposit": true },
{ "bankName": "Морской Банк", "investName": "Правильным курсом +", "currency": "RUB", "incomeType": 4.55, "sumMin": 100000, "sumMax": Infinity, "termMin": 1, "termMax": 3, "canDeposit": true },
{ "bankName": "Норвик Банк", "investName": "Лаконичный", "currency": "RUB", "incomeType": 4.5, "sumMin": 500, "sumMax": 50000000, "termMin": 1, "termMax": 1, "canDeposit": true },
{ "bankName": "Промсельхозбанк", "investName": "Конструктор", "currency": "RUB", "incomeType": 4.5, "sumMin": 10000, "sumMax": Infinity, "termMin": 1, "termMax": 3, "canDeposit": true },
{ "bankName": "Акибанк", "investName": "Онлайн", "currency": "RUB", "incomeType": 6.5, "sumMin": 1000, "sumMax": Infinity, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Банк БКФ", "investName": "Ключевой стандарт", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": Infinity, "termMin": 6, "termMax": 13, "canDeposit": true },
{ "bankName": "Экспобанк", "investName": "Специальный (в конце срока)", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": 10000000, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Инвестторгбанк", "investName": "ИТБ-Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Транскапиталбанк", "investName": "ТКБ.Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Евроазиатский Инвестиционный Банк", "investName": "Классика", "currency": "RUB", "incomeType": 6.1, "sumMin": 100000, "sumMax": Infinity, "termMin": 6, "termMax": 12, "canDeposit": true },
{ "bankName": "Тимер Банк", "investName": "Надежный выбор", "currency": "RUB", "incomeType": 6, "sumMin": 10000, "sumMax": Infinity, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Евразийский Банк", "investName": "TURBO MAXIMUM", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": 299999, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Таврический Банк", "investName": "Достижимый (онлайн)", "currency": "RUB", "incomeType": 6, "sumMin": 50000, "sumMax": Infinity, "termMin": 6, "termMax": 6, "canDeposit": true },
{ "bankName": "Экспобанк", "investName": "Юбилейный 25 (в конце срока)", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": 20000000, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Крокус-Банк", "investName": "Ежемесячный доход", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Промсельхозбанк", "investName": "Ваш выбор", "currency": "RUB", "incomeType": 6.3, "sumMin": 10000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Нацинвестпромбанк", "investName": "Прибыльный", "currency": "RUB", "incomeType": 6.3, "sumMin": 50000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Ишбанк", "investName": "Накопительный", "currency": "RUB", "incomeType": 6.25, "sumMin": 100000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Примсоцбанк", "investName": "Новогодний чулок (333 дня)", "currency": "RUB", "incomeType": 6.2, "sumMin": 10000, "sumMax": Infinity, "termMin": 11, "termMax": 11, "canDeposit": true },
{ "bankName": "Еврофинанс Моснарбанк", "investName": "Пополняемый", "currency": "RUB", "incomeType": 6.75, "sumMin": 1000000, "sumMax": Infinity, "termMin": 12, "termMax": 24, "canDeposit": true },
{ "bankName": "Евроазиатский Инвестиционный Банк", "investName": "VIP", "currency": "RUB", "incomeType": 6.35, "sumMin": 1000000, "sumMax": Infinity, "termMin": 9, "termMax": 12, "canDeposit": true },
{ "bankName": "Российская Финансовая Корпорация", "investName": "Универсальный", "currency": "RUB", "incomeType": 6, "sumMin": 5000, "sumMax": Infinity, "termMin": 3, "termMax": 3, "canDeposit": true },
{ "bankName": "Московский Кредитный Банк", "investName": "МЕГА Онлайн", "currency": "RUB", "incomeType": 5.8, "sumMin": 1000, "sumMax": Infinity, "termMin": 3, "termMax": 5, "canDeposit": true },
{ "bankName": "Александровский", "investName": "Черника 19/20", "currency": "RUB", "incomeType": 5.6, "sumMin": 20000, "sumMax": Infinity, "termMin": 3, "termMax": 3, "canDeposit": true },
{ "bankName": "Финанс Бизнес Банк", "investName": "Мандариновый!", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": Infinity, "termMin": 3, "termMax": 3, "canDeposit": true },
{ "bankName": "ЦентроКредит", "investName": "Доход Плюс", "currency": "USD", "incomeType": 1.15, "sumMin": 5000, "sumMax": Infinity, "termMin": 3, "termMax": 3, "canDeposit": true },
{ "bankName": "Совкомбанк", "investName": "Удобный (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": Infinity, "termMin": 3, "termMax": 6, "canDeposit": true },
{ "bankName": "Веста", "investName": "Веста - Копилка", "currency": "USD", "incomeType": 1, "sumMin": 10000, "sumMax": Infinity, "termMin": 3, "termMax": 6, "canDeposit": true },
{ "bankName": "Славия", "investName": "Славный Капитал", "currency": "USD", "incomeType": 0.85, "sumMin": 5000, "sumMax": Infinity, "termMin": 3, "termMax": 4, "canDeposit": true },
{ "bankName": "Роскосмосбанк", "investName": "Комфортный", "currency": "USD", "incomeType": 0.8, "sumMin": 500, "sumMax": Infinity, "termMin": 3, "termMax": 6, "canDeposit": true },
{ "bankName": "ФорБанк", "investName": "Срочный накопительный", "currency": "USD", "incomeType": 0.8, "sumMin": 10000, "sumMax": 500000, "termMin": 3, "termMax": 3, "canDeposit": true },
{ "bankName": "Московский Областной Банк", "investName": "Гарантированный доллар", "currency": "USD", "incomeType": 0.75, "sumMin": 50, "sumMax": Infinity, "termMin": 4, "termMax": 4, "canDeposit": true },
{ "bankName": "Объединенный Резервный Банк", "investName": "ОРБ-Накопительный (в конце срока)", "currency": "USD", "incomeType": 1.6, "sumMin": 1000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Банк Агора", "investName": "Срочный", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Тинькофф Банк", "investName": "СмартВклад (с повышенной ставкой)", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Первый Инвестиционный Банк", "investName": "Закон сохранения", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": Infinity, "termMin": 12, "termMax": 12, "canDeposit": true },
{ "bankName": "Новый Век", "investName": "Сберегательный", "currency": "USD", "incomeType": 1.5, "sumMin": 5000, "sumMax": 20000, "termMin": 12, "termMax": 12, "canDeposit": true }
];

class Application {
    constructor() {
        this.btn_calculate = document.getElementById("form-button-calculate");
        this.tbl_mainTable = document.getElementById("main-table");
        this.txt_formError = document.getElementById("form-error");
        this.btn_calculate.addEventListener("click", this.handleUserInput);
    }

    initialize = () => {
        this.initSum = Number(document.getElementById("input-initsum").value);
        this.depSum = Number(document.getElementById("input-monthlydeposit").value);
        this.term = Number(document.getElementById("input-term").value);
        this.currency = document.getElementById("select-currency").value;

    }

    handleUserInput = () => {
        this.initialize();

        let errors = this.getInputErrors(this.initSum, this.depSum, this.term);
        this.txt_formError.innerHTML = "";
        if (errors !== "") {
            this.txt_formError.innerHTML = errors;
            return;
        }

        let userDeposit = new Deposit(this.initSum, this.depSum, this.term, this.currency);
        let productsCollection = getBankProducts(productList);
        let viableProducts = this.getViableProducts(userDeposit, productsCollection);
        let options = this.getOptions(userDeposit, viableProducts);
        options.sort(this.sortCallback_option);

        if (options.length === 0) {
            this.txt_formError.innerHTML = "Не найдено ни одного варианта!";
        }

        this.drawTable(options);
    }

    getInputErrors(_initSum, _depSum, _term) {
        // Checks args for validity and returns a compiled error message

        let errorMessage = "";
        if (isNaN(_initSum) || _initSum <= 0) {
            errorMessage += "<p>Ошибка: начальная сумма должна быть больше нуля</p>";
            console.error("Ошибка: начальная сумма должна быть больше нуля");
        }

        if (isNaN(_depSum) || _depSum < 0) {
            errorMessage += "<p>Ошибка: сумма ежемесячного пополнения должна быть неотрицательной</p>";
            console.error("Ошибка: сумма ежемесячного пополнения должна быть неотрицательной");
        }

        if (isNaN(_term) || _term <= 0 || _term % 1 !== 0) {
            errorMessage += "<p>Ошибка: срок вклада должен быть положительным, целым числом</p>";
            console.error("Ошибка: срок вклада должен быть положительным, целым числом");
        }

        return errorMessage;
    }

    getViableProducts = (_deposit, _products) => {
        let result = _products;

        // -- Series of filters
        // filter by currency
        result = result.filter((curProd) => curProd.currency === _deposit.currency);
        // filter by deposit possibility
        result = result.filter((curProd) => !((!curProd.canDeposit && _deposit.depSum > 0)));
        // filter by term
        result = result.filter((curProd) => (curProd.termMin <= _deposit.term) && (curProd.termMax >= _deposit.term));
        // filter by initsum
        result = result.filter((curProd) => (curProd.sumMin <= _deposit.initSum) && (curProd.sumMax >= _deposit.initSum));

        return result;
    }

    getOptions = (_curDeposit, _viableProducts) => {
        let result = [];

        for (let product of _viableProducts) {
            result.push(calculator(_curDeposit, product));
        }
        return result;
    }

    sortCallback_option = (a, b) => {
        if (a.finalSum < b.finalSum) {
            return 1;
        }
        if (a.finalSum > b.finalSum) {
            return -1;
        }
        return 0;
    }

    drawTable = (_optionsTable) => {

        function clearTable(in_table) {
            // Честно украдено из гугла :)
            let rows = in_table.rows;
            let i = rows.length;
            while (--i) {
                in_table.deleteRow(i);
            }
        }

        // Reset the table
        clearTable(this.tbl_mainTable);
        // Draw the table
        for (const option of _optionsTable) {
            let row = this.tbl_mainTable.insertRow(-1);

            // Insert new cells (<td> elements)
            let cell0 = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            let cell3 = row.insertCell(3);

            // Add some text to the new cells:
            cell0.innerHTML = option.bankName;
            cell1.innerHTML = option.investName;
            cell2.innerHTML = option.incomePerc;
            cell3.innerHTML = option.finalSum.toFixed(2);

        }
    }
}




class Deposit {
    constructor(initSum, depSum, term, currency) {
        this.initSum = initSum
        this.depSum = depSum
        this.term = term
        this.currency = currency
    }
}

class BankProduct {
    constructor(bankName, investName, currency, incomeType, sumMin, sumMax, termMin, termMax, canDeposit) {
        this.bankName = bankName;
        this.investName = investName;
        this.currency = currency;
        this.incomeType = incomeType;
        this.sumMin = sumMin;
        this.sumMax = sumMax;
        this.termMin = termMin;
        this.termMax = termMax;
        this.canDeposit = canDeposit;
    }
}

function calculator(deposit, bankProduct) {
    function getFinalSum(initSum, percent, depSum, term) {
        let monthlyPerc = percent / 100 / 12;
        let futureValue = initSum;
        for (let i = 0; i < term; i++) {
            futureValue = futureValue * (1 + monthlyPerc) + depSum;
        }

        return futureValue - depSum;
    }

    let bankName = bankProduct.bankName;
    let invName = bankProduct.investName;
    let percent = bankProduct.incomeType;
    let finalSum = getFinalSum(deposit.initSum, percent, deposit.depSum, deposit.term);
    return new ProductOption(bankName, invName, percent, finalSum);
}




class ProductOption {
    constructor(bankName, investName, incomePerc, finalSum) {
        this.bankName = bankName;
        this.investName = investName;
        this.incomePerc = incomePerc;
        this.finalSum = finalSum;
    }
}


function getBankProducts(bankProducts) {
    items = [];

    for (let elem of bankProducts) {
        items.push(new BankProduct(elem["bankName"],
            elem["investName"],
            elem["currency"],
            elem["incomeType"],
            elem["sumMin"],
            elem["sumMax"],
            elem["termMin"],
            elem["termMax"],
            elem["canDeposit"]));
    }

    return items;
}
