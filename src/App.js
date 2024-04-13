import './App.css';

function Velasco({text}) {
  return (
    <div className="Velasco">
      {text}
    </div>    
  );
}

function Velasco2() {
  return (
    <div class="Velasco2">
      <div class="flex-container">
        <div class="flex-container-left">
          <div class="item1">1</div>
          <div class="item2">2</div>
        </div>
        <div class="flex-container-right">
          <div class="item3">3</div>  
          <div class="item4">4</div>
        </div>
      </div>  
    <div class="grid-container">
        <div class="grid-container-left">
          <div class="item5">5</div>
          <div class="item6">6</div>
        </div>
        <div class="grid-container-right">
          <div class="item7">7</div>  
          <div class="item8">8</div>
        </div>
      </div>  
    </div>   
  );
}

export default function App() {
  return (
    <div>
      <Velasco text={"Robert Velasco"}/>
      <Velasco2 />
    </div>
  );
}
