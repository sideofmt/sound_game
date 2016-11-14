describe('MML TEST', function() {

    describe('MML.prototype.get', function() {

        mml.ready(new Mocks.OscillatorModule, ['T74  O4  AF+DB2 AEB4 G+4 AF+C+2&AF+C+8 F+8 A8 R4', 'T74  O2  B2  O3  C+2 D1  O2  B2  O3  C+2 D2 E2  O2  A1 E1 F+2 E2  O3  DD1 EE1&EE1']);

        it('should return the array that contains performance information', function() {
            expect(mml.get(0))
                      .toEqual([
                                    {indexes : ['R'],            frequencies : [0],                                                                            start : 6.081081081081081,  duration : 0.8108108108108109,  stop : 6.891891891891891},
                                    {indexes : [48],             frequencies : [440.00000000000017],                                                           start : 5.675675675675675,  duration : 0.40540540540540543, stop : 6.081081081081081},
                                    {indexes : [45],             frequencies : [369.9944227116345],                                                            start : 5.27027027027027,   duration : 0.40540540540540543, stop : 5.675675675675675},
                                    {indexes : [48, 45, 40],     frequencies : [440.00000000000017, 369.9944227116345, 277.1826309768722],                     start : 3.2432432432432434, duration : 2.027027027027027,   stop : 5.27027027027027},
                                    {indexes : [47],             frequencies : [415.30469757994535],                                                           start : 2.4324324324324325, duration : 0.8108108108108109,  stop : 3.2432432432432434},
                                    {indexes : [48, 43, 38],     frequencies : [440.00000000000017, 329.62755691287015, 246.94165062806215],                   start : 1.6216216216216217, duration : 0.8108108108108109,  stop : 2.4324324324324325},
                                    {indexes : [48, 45, 41, 38], frequencies : [440.00000000000017, 369.9944227116345, 293.6647679174077, 246.94165062806215], start : 0,                  duration : 1.6216216216216217,  stop : 1.6216216216216217}
                              ]);
        });

        it('should return the array that contains performance information', function() {
            expect(mml.get(1))
                      .toEqual([
                                    {indexes : [31, 19], frequencies : [164.81377845643502, 82.40688922821751], start : 25.94594594594594,  duration : 6.486486486486487,  stop : 32.43243243243243},
                                    {indexes : [29, 17], frequencies : [146.83238395870382, 73.41619197935191], start : 22.702702702702698, duration : 3.2432432432432434, stop : 25.94594594594594},
                                    {indexes : [19],     frequencies : [82.40688922821751],                     start : 21.081081081081077, duration : 1.6216216216216217, stop : 22.702702702702698},
                                    {indexes : [21],     frequencies : [92.49860567790861],                     start : 19.459459459459456, duration : 1.6216216216216217, stop : 21.081081081081077},
                                    {indexes : [19],     frequencies : [82.40688922821751],                     start : 16.216216216216214, duration : 3.2432432432432434, stop : 19.459459459459456},
                                    {indexes : [24],     frequencies : [110.00000000000003],                    start : 12.972972972972972, duration : 3.2432432432432434, stop : 16.216216216216214},
                                    {indexes : [31],     frequencies : [164.81377845643502],                    start : 11.35135135135135,  duration : 1.6216216216216217, stop : 12.972972972972972},
                                    {indexes : [29],     frequencies : [146.83238395870382],                    start : 9.72972972972973,   duration : 1.6216216216216217, stop : 11.35135135135135},
                                    {indexes : [28],     frequencies : [138.59131548843607],                    start : 8.108108108108109,  duration : 1.6216216216216217, stop : 9.72972972972973},
                                    {indexes : [26],     frequencies : [123.47082531403106],                    start : 6.486486486486487,  duration : 1.6216216216216217, stop : 8.108108108108109},
                                    {indexes : [29],     frequencies : [146.83238395870382],                    start : 3.2432432432432434, duration : 3.2432432432432434, stop : 6.486486486486487},
                                    {indexes : [28],     frequencies : [138.59131548843607],                    start : 1.6216216216216217, duration : 1.6216216216216217, stop : 3.2432432432432434},
                                    {indexes : [26],     frequencies : [123.47082531403106],                    start : 0,                  duration : 1.6216216216216217, stop : 1.6216216216216217}
                              ]);
        });

        it('should return the array that contains performance information', function() {
            expect(mml.get())
                      .toEqual([
                                   [
                                       {indexes : ['R'],            frequencies : [0],                                                                            start : 6.081081081081081,  duration : 0.8108108108108109,  stop : 6.891891891891891},
                                       {indexes : [48],             frequencies : [440.00000000000017],                                                           start : 5.675675675675675,  duration : 0.40540540540540543, stop : 6.081081081081081},
                                       {indexes : [45],             frequencies : [369.9944227116345],                                                            start : 5.27027027027027,   duration : 0.40540540540540543, stop : 5.675675675675675},
                                       {indexes : [48, 45, 40],     frequencies : [440.00000000000017, 369.9944227116345, 277.1826309768722],                     start : 3.2432432432432434, duration : 2.027027027027027,   stop : 5.27027027027027},
                                       {indexes : [47],             frequencies : [415.30469757994535],                                                           start : 2.4324324324324325, duration : 0.8108108108108109,  stop : 3.2432432432432434},
                                       {indexes : [48, 43, 38],     frequencies : [440.00000000000017, 329.62755691287015, 246.94165062806215],                   start : 1.6216216216216217, duration : 0.8108108108108109,  stop : 2.4324324324324325},
                                       {indexes : [48, 45, 41, 38], frequencies : [440.00000000000017, 369.9944227116345, 293.6647679174077, 246.94165062806215], start : 0,                  duration : 1.6216216216216217,  stop : 1.6216216216216217}
                                   ],
                                   [
                                       {indexes : [31, 19], frequencies : [164.81377845643502, 82.40688922821751], start : 25.94594594594594,  duration : 6.486486486486487,  stop : 32.43243243243243},
                                       {indexes : [29, 17], frequencies : [146.83238395870382, 73.41619197935191], start : 22.702702702702698, duration : 3.2432432432432434, stop : 25.94594594594594},
                                       {indexes : [19],     frequencies : [82.40688922821751],                     start : 21.081081081081077, duration : 1.6216216216216217, stop : 22.702702702702698},
                                       {indexes : [21],     frequencies : [92.49860567790861],                     start : 19.459459459459456, duration : 1.6216216216216217, stop : 21.081081081081077},
                                       {indexes : [19],     frequencies : [82.40688922821751],                     start : 16.216216216216214, duration : 3.2432432432432434, stop : 19.459459459459456},
                                       {indexes : [24],     frequencies : [110.00000000000003],                    start : 12.972972972972972, duration : 3.2432432432432434, stop : 16.216216216216214},
                                       {indexes : [31],     frequencies : [164.81377845643502],                    start : 11.35135135135135,  duration : 1.6216216216216217, stop : 12.972972972972972},
                                       {indexes : [29],     frequencies : [146.83238395870382],                    start : 9.72972972972973,   duration : 1.6216216216216217, stop : 11.35135135135135},
                                       {indexes : [28],     frequencies : [138.59131548843607],                    start : 8.108108108108109,  duration : 1.6216216216216217, stop : 9.72972972972973},
                                       {indexes : [26],     frequencies : [123.47082531403106],                    start : 6.486486486486487,  duration : 1.6216216216216217, stop : 8.108108108108109},
                                       {indexes : [29],     frequencies : [146.83238395870382],                    start : 3.2432432432432434, duration : 3.2432432432432434, stop : 6.486486486486487},
                                       {indexes : [28],     frequencies : [138.59131548843607],                    start : 1.6216216216216217, duration : 1.6216216216216217, stop : 3.2432432432432434},
                                       {indexes : [26],     frequencies : [123.47082531403106],                    start : 0,                  duration : 1.6216216216216217, stop : 1.6216216216216217}
                                   ]
                              ]);
        });

    });

});
