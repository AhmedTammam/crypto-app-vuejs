          
export default {
    render(){
        if(this.filteration.length > 0){
            return(
                <div class="table-responsive-sm text-center">
                    <table class="table table-hover table-bg">
                        <thead class="thead btn-primary">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume(24h)</th>
                            <th scope="col">Circulating Supply</th>
                            <th scope="col">change(24h)</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.filteration.map(coin => (
                            <tr key={coin.id}>
                                <td>{coin.name}</td>
                                <td>{coin.market_cap_usd}</td>
                                <td>{coin.price_usd}</td>
                                <td>{coin['24h_volume_usd']}</td>
                                <td>{coin.available_supply}</td>
                                <td>{coin.percent_change_24h}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }else{
            return(
                <div class="table-responsive-sm text-center">
                    <table class="table table-hover table-bg">
                        <thead class="thead btn-primary">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Price</th>
                            <th scope="col">Volume(24h)</th>
                            <th scope="col">Circulating Supply</th>
                            <th scope="col">change(24h)</th>
                            </tr>
                        </thead>
                        <tbody v-else="filteration.length">
                        {this.coins.map(coin => (
                            <tr key={coin.id}>
                                <td>{coin.name}</td>
                                <td>{coin.market_cap_usd}</td>
                                <td>{coin.price_usd}</td>
                                <td>{coin['24h_volume_usd']}</td>
                                <td>{coin.available_supply}</td>
                                <td>{coin.percent_change_24h}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    },
    props: ['coins', 'filteration']
}
