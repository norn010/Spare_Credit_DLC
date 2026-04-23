const express = require('express');
const cors = require('cors');
const { sql, poolPromise } = require('./dbConfig');

const app = express();
app.use(cors());
app.use(express.json());

// ============================================
// API for Brand_Acc_Tb
// ============================================

// GET all
app.get('/api/brand-acc', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Brand_Acc_Tb');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST
app.post('/api/brand-acc', async (req, res) => {
    try {
        const { Brand, Branch, Shorts, Acc1, Acc2, Acc3 } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('Brand', sql.NVarChar, Brand)
            .input('Branch', sql.NVarChar, Branch)
            .input('Shorts', sql.NVarChar, Shorts)
            .input('Acc1', sql.NVarChar, Acc1)
            .input('Acc2', sql.NVarChar, Acc2)
            .input('Acc3', sql.NVarChar, Acc3)
            .query(`INSERT INTO Brand_Acc_Tb (Brand, Branch, Shorts, Acc1, Acc2, Acc3) 
                    VALUES (@Brand, @Branch, @Shorts, @Acc1, @Acc2, @Acc3)`);
        res.status(201).json({ message: 'Added successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// PUT (Update)
app.put('/api/brand-acc/:brand/:branch', async (req, res) => {
    try {
        const { brand, branch } = req.params;
        const { Brand, Branch, Shorts, Acc1, Acc2, Acc3 } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('oldBrand', sql.NVarChar, brand)
            .input('oldBranch', sql.NVarChar, branch)
            .input('Brand', sql.NVarChar, Brand)
            .input('Branch', sql.NVarChar, Branch)
            .input('Shorts', sql.NVarChar, Shorts)
            .input('Acc1', sql.NVarChar, Acc1)
            .input('Acc2', sql.NVarChar, Acc2)
            .input('Acc3', sql.NVarChar, Acc3)
            .query(`UPDATE Brand_Acc_Tb 
                    SET Brand=@Brand, Branch=@Branch, Shorts=@Shorts, Acc1=@Acc1, Acc2=@Acc2, Acc3=@Acc3
                    WHERE Brand=@oldBrand AND Branch=@oldBranch`);
        res.json({ message: 'Updated successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// DELETE
app.delete('/api/brand-acc/:brand/:branch', async (req, res) => {
    try {
        const { brand, branch } = req.params;
        const pool = await poolPromise;
        await pool.request()
            .input('Brand', sql.NVarChar, brand)
            .input('Branch', sql.NVarChar, branch)
            .query(`DELETE FROM Brand_Acc_Tb WHERE Brand=@Brand AND Branch=@Branch`);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});


// ============================================
// API for Com_Ex_Tb
// ============================================

// GET all
app.get('/api/com-ex', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Com_Ex_Tb');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST
app.post('/api/com-ex', async (req, res) => {
    try {
        const { Brand, Branch, LoneCode, ExpressCode, Cusname } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('Brand', sql.NVarChar, Brand)
            .input('Branch', sql.NVarChar, Branch)
            .input('LoneCode', sql.NVarChar, LoneCode)
            .input('ExpressCode', sql.NVarChar, ExpressCode)
            .input('Cusname', sql.NVarChar, Cusname)
            .query(`INSERT INTO Com_Ex_Tb (Brand, Branch, LoneCode, ExpressCode, Cusname) 
                    VALUES (@Brand, @Branch, @LoneCode, @ExpressCode, @Cusname)`);
        res.status(201).json({ message: 'Added successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// PUT (Update)
app.put('/api/com-ex/:brand/:branch', async (req, res) => {
    try {
        const { brand, branch } = req.params;
        const { Brand, Branch, LoneCode, ExpressCode, Cusname } = req.body;
        const pool = await poolPromise;
        await pool.request()
            .input('oldBrand', sql.NVarChar, brand)
            .input('oldBranch', sql.NVarChar, branch)
            .input('Brand', sql.NVarChar, Brand)
            .input('Branch', sql.NVarChar, Branch)
            .input('LoneCode', sql.NVarChar, LoneCode)
            .input('ExpressCode', sql.NVarChar, ExpressCode)
            .input('Cusname', sql.NVarChar, Cusname)
            .query(`UPDATE Com_Ex_Tb 
                    SET Brand=@Brand, Branch=@Branch, LoneCode=@LoneCode, ExpressCode=@ExpressCode, Cusname=@Cusname
                    WHERE Brand=@oldBrand AND Branch=@oldBranch`);
        res.json({ message: 'Updated successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// DELETE
app.delete('/api/com-ex/:brand/:branch', async (req, res) => {
    try {
        const { brand, branch } = req.params;
        const pool = await poolPromise;
        await pool.request()
            .input('Brand', sql.NVarChar, brand)
            .input('Branch', sql.NVarChar, branch)
            .query(`DELETE FROM Com_Ex_Tb WHERE Brand=@Brand AND Branch=@Branch`);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
