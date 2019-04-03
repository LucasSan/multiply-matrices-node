const express = require('express')
const app = express()

app.listen(3001, () => {
    const multiplyMatrices = (m1, m2) => {
        let result = [];
        for (let i = 0; i < m1.length; i++) {
            result[i] = [];
            for (let j = 0; j < m2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < m1[0].length; k++) {
                    sum += m1[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    const m1 = [[1, 2], [3, 4]]
    const m2 = [[5, 6], [7, 8]]

    console.log(multiplyMatrices(m1, m2))
})
