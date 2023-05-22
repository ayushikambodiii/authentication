import { useState } from "react"
const Calculator = () => {
    const [val, setVal] = useState('')
    const clear = () => {
        setVal('')
    }
    const back = () => {
        setVal(val.slice(0, val.length - 1))
    }
    const handleclick = (e) => {
        setVal(val.concat(e.target.value))
    }
    const calculation = () => {
        // alert('hiee')
        console.log("-------->>>>>", val)
        if (val.includes('log')) {
            let blank = val.replace('log', '');
            let result = Math.log10(blank);
            setVal(result);
        }
        else if (val.includes('cos')) {
            let blank = val.replace('cos', '');
            let result = Math.cos(blank);
            setVal(result);
        }
        else if (val.includes('sin')) {
            let blank = val.replace('sin', '');
            let result = Math.sin(blank);
            setVal(result);
        }
        else if (val.includes('tan')) {
            let blank = val.replace('tan', '');
            let result = Math.tan(blank);
            setVal(result);
        }
        else if (val.includes('rad')) {
            let blank = val.replace('rad', '');
            let result = blank * (Math.PI / 180)
            setVal(result);
        }
        else if (val.includes('e')) {
            let blank = val.replace('e', '');
            let result = Math.exp(blank);
            setVal(result);
        }
        else if (val.includes('∘')) {
            let blank = val.replace('∘', '');
            let result = blank * (180 / Math.PI)
            setVal(result);
        }
        else if (val.includes('In')) {
            let blank = val.replace('In', '');
            let result = Math.log(blank);
            setVal(result);
        }
        else if (val.includes('π')) {
            let blank = val.replace('π', '');
            let result = blank * Math.PI;
            setVal(result);
        }
        else if (val.includes('x²')) {
            let blank = val.replace('x²', '');
            let result = eval(blank * blank);
            setVal(result);
        }
        else if (val.includes('√')) {
            let blank = val.replace('√', '');
            let result = Math.sqrt(blank);
            setVal(result);
        }
        else if (val.includes('<=')) {
            let blank = eval(val).toString();
            if (blank.includes('true')) {
                const result = blank.replace('true', '1')
                console.log("trueee")
                setVal(result);
            }
            else if (blank.includes('false')) {
                const result = blank.replace('false', '0')
                console.log("false")
                setVal(result);
            }
        }
        else if (val.includes('!')) {
            let blank = val.replace('!', '');
            let fact = 1;
            for (var i = 1; i <= blank; i++) {
                fact *= i;
            }
            setVal(fact)
        }
        else if (val.includes('^')) {
            let [first, second] = val.split('^');
            let result = Math.pow(first, second).toString();
            setVal(result);
        }
        else {
            setVal(eval(val).toString())
            console.log('------>>', eval(val).toString())
        }
    }
    return (
        <>
            <section className="text-center mt-5 calc">
                <div>
                    <input type="text" className="" readOnly value={val} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'AC'} className="mx-1" id="" onClick={clear} />
                    <input type="button" value={'C'} className="mx-1" id="" onClick={back} />
                    <input type="button" value={'('} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={')'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'!'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'^'} className="mx-1" id="" onClick={handleclick} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'%'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'log'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'cos'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'sin'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'tan'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'rad'} className="mx-1" id="" onClick={handleclick} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'/'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'7'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'8'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'9'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'∘'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'e'} className="mx-1" id="" onClick={handleclick} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'*'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'4'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'5'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'6'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'In'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'π'} className="mx-1" id="" onClick={handleclick} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'-'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'1'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'2'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'3'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'x²'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'√'} className="mx-1" id="" onClick={handleclick} />
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <input type="button" value={'+'} className="mx-1 " id="" onClick={handleclick} />
                    <input type="button" value={'.'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'0'} className="mx-1 num_color" id="" onClick={handleclick} />
                    <input type="button" value={'00'} className="mx-1" id="" onClick={handleclick} />
                    <input type="button" value={'='} className="mx-1" id="" onClick={calculation} />
                    <input type="button" value={'<='} className="mx-1" id="" onClick={handleclick} />
                </div>
            </section>
        </>
    )
}
export default Calculator