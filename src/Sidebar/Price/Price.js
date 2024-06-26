import Input from "../../components/Input"

function Price ({handleChange}){
    return <>
    <div className="ml">
        <h2 className="sidebar-title-price-title">Price</h2>
        
        <div>
    <label  className='sidebar-label-container'>
        <input type='radio' onChange={handleChange} value="" name='test'/>
        <span className='checkmark'></span> All
        
    </label>
    <Input 
    handleChange={handleChange}
    value={50}
    title="$0 -$50"
    name="test2"
    />

<Input 
    handleChange={handleChange}
    value={100}
    title="$50-$100"
    name="test2"
    />

<Input 
    handleChange={handleChange}
    value={150}
    title="$150-$200"
    name="test2"
    />
   
   </div>
</div>    
    </>
}
export default Price