let financialData = [
    {
        "month": 1,
        "newCustomers": 10,
        "churnedCustomers": 0,
        "totalCustomers": 57,
        "mrr": 5643,
        "totalRevenue": 5643,
        "churn": 0
    },
    {
        "month": 2,
        "newCustomers": 40,
        "churnedCustomers": 2,
        "totalCustomers": 95,
        "mrr": 9405,
        "totalRevenue": 15048,
        "churn": 0.03508771929824561
    },
    {
        "month": 3,
        "newCustomers": 6,
        "churnedCustomers": 9,
        "totalCustomers": 92,
        "mrr": 9108,
        "totalRevenue": 24156,
        "churn": 0.09473684210526316
    },
    {
        "month": 4,
        "newCustomers": 16,
        "churnedCustomers": 3,
        "totalCustomers": 105,
        "mrr": 10395,
        "totalRevenue": 34551,
        "churn": 0.03260869565217391
    },
    {
        "month": 5,
        "newCustomers": 20,
        "churnedCustomers": 2,
        "totalCustomers": 123,
        "mrr": 12177,
        "totalRevenue": 46728,
        "churn": 0.01904761904761905
    },
    {
        "month": 6,
        "newCustomers": 17,
        "churnedCustomers": 7,
        "totalCustomers": 133,
        "mrr": 13167,
        "totalRevenue": 59895,
        "churn": 0.056910569105691054
    },
    {
        "month": 7,
        "newCustomers": 28,
        "churnedCustomers": 5,
        "totalCustomers": 156,
        "mrr": 15444,
        "totalRevenue": 75339,
        "churn": 0.03759398496240601
    },
    {
        "month": 8,
        "newCustomers": 13,
        "churnedCustomers": 14,
        "totalCustomers": 155,
        "mrr": 15345,
        "totalRevenue": 90684,
        "churn": 0.08974358974358974
    },
    {
        "month": 9,
        "newCustomers": 43,
        "churnedCustomers": 13.762194394946885,
        "totalCustomers": 184.23780560505313,
        "mrr": 18239.54275490026,
        "totalRevenue": 108923.54275490026,
        "churn": 0.08878835093514119
    },
    {
        "month": 10,
        "newCustomers": 8,
        "churnedCustomers": 0.11130730591243587,
        "totalCustomers": 192.12649829914068,
        "mrr": 19020.523331614928,
        "totalRevenue": 127944.06608651519,
        "churn": 0.0006041501935332594
    },
    {
        "month": 11,
        "newCustomers": 23,
        "churnedCustomers": 0.13312475573037608,
        "totalCustomers": 214.9933735434103,
        "mrr": 21284.34398079762,
        "totalRevenue": 149228.4100673128,
        "churn": 0.0006929015878023292
    },
    {
        "month": 12,
        "newCustomers": 12,
        "churnedCustomers": 1.8380184376141022,
        "totalCustomers": 225.15535510579622,
        "mrr": 22290.380155473824,
        "totalRevenue": 171518.79022278663,
        "churn": 0.008549186457800196,
        "annualRecurringRevenue": 171518.79022278663
    },
    {
        "month": 13,
        "newCustomers": 3,
        "churnedCustomers": 2.348393701973206,
        "totalCustomers": 225.806961403823,
        "mrr": 22354.88917897848,
        "totalRevenue": 193873.6794017651,
        "churn": 0.010430103698265317
    },
    {
        "month": 14,
        "newCustomers": 46,
        "churnedCustomers": 3,
        "totalCustomers": 268.80696140382304,
        "mrr": 26611.88917897848,
        "totalRevenue": 220485.5685807436,
        "churn": 0.013285684291348906
    },
    {
        "month": 15,
        "newCustomers": 12,
        "churnedCustomers": 2.7347142090334016,
        "totalCustomers": 278.0722471947896,
        "mrr": 27529.15247228417,
        "totalRevenue": 248014.72105302778,
        "churn": 0.01017352450528652
    },
    {
        "month": 16,
        "newCustomers": 6,
        "churnedCustomers": 9.734389093294233,
        "totalCustomers": 274.3378581014954,
        "mrr": 27159.44795204804,
        "totalRevenue": 275174.1690050758,
        "churn": 0.03500669049678767
    },
    {
        "month": 17,
        "newCustomers": 9,
        "churnedCustomers": 1.187729385078391,
        "totalCustomers": 282.150128716417,
        "mrr": 27932.86274292528,
        "totalRevenue": 303107.0317480011,
        "churn": 0.0043294403233219555
    },
    {
        "month": 18,
        "newCustomers": 17,
        "churnedCustomers": 3.1069944411345762,
        "totalCustomers": 296.0431342752824,
        "mrr": 29308.270293252957,
        "totalRevenue": 332415.30204125406,
        "churn": 0.011011848391738107
    },
    {
        "month": 19,
        "newCustomers": 54,
        "churnedCustomers": 6.449635851712063,
        "totalCustomers": 343.59349842357034,
        "mrr": 34015.75634393346,
        "totalRevenue": 366431.0583851875,
        "churn": 0.021786135549134958
    },
    {
        "month": 20,
        "newCustomers": 23,
        "churnedCustomers": 0.16066571818384778,
        "totalCustomers": 366.4328327053865,
        "mrr": 36276.850437833265,
        "totalRevenue": 402707.9088230208,
        "churn": 0.0004676040696957093
    },
    {
        "month": 21,
        "newCustomers": 12,
        "churnedCustomers": 8.240684656299823,
        "totalCustomers": 370.19214804908665,
        "mrr": 36649.022656859575,
        "totalRevenue": 439356.9314798804,
        "churn": 0.02248893636374928
    },
    {
        "month": 22,
        "newCustomers": 34,
        "churnedCustomers": 14.687919076434335,
        "totalCustomers": 389.5042289726523,
        "mrr": 38560.91866829258,
        "totalRevenue": 477917.850148173,
        "churn": 0.03967647383619479
    },
    {
        "month": 23,
        "newCustomers": 15,
        "churnedCustomers": 4,
        "totalCustomers": 400.5042289726523,
        "mrr": 39649.91866829258,
        "totalRevenue": 517567.76881646557,
        "churn": 0.010269464879881564
    },
    {
        "month": 24,
        "newCustomers": 13,
        "churnedCustomers": 24.885752436428845,
        "totalCustomers": 388.61847653622345,
        "mrr": 38473.22917708612,
        "totalRevenue": 556040.9979935517,
        "churn": 0.06213605409427056,
        "annualRecurringRevenue": 556040.9979935517
    }
]

export default financialData