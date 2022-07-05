import "./StatsCard.css"

export default function StatsCards(props) {
    return (
        <div className="card-container">
            <div className="card-info">
                <h1 className="card-title">Get <span className="card-accent">insights</span> that help your business grow.</h1>
                <p  className="card-desc">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div className="card-info-stats">
                    <div className="card-info-stat">
                        <h2>10k+</h2>
                        <p>companies</p>
                    </div>
                    <div className="card-info-stat">
                        <h2>314</h2>
                        <p>templates</p>
                    </div>
                    <div className="card-info-stat">
                        <h2>12M+</h2>
                        <p>queries</p>
                    </div>
                </div>
            </div>
            <div className="card-image" alt="3 happy womans using laptops and doing business" />
        </div>
    )
}