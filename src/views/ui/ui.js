import React from 'react'
import '../../App.css';

export default function ui(prop) {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <div className="card">
                <div style={{ backgroundColor: '#0B5ED7', color: 'white', fontWeight: 'bold' }} className="card-header">
                    <div style={{width: '100%', textAlign: 'center', fontSize: '30px'}}>-Quiz App-</div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{prop.title}</h5>
                    <div className="card" style={{ width: '100%' }}>
                        <ul style={{ outline: 'solid 1px lightgray' }} className="list-group list-group-flush">
                            {prop.list}
                            <li onClick={prop.onClick} className="list-group-item">{prop.correct}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
