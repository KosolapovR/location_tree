import React, {useEffect, useState} from 'react';
import s from './content.module.css';
import {connect} from "react-redux";
import logo from './Dual Ring-1s-200px.gif'
import {fetchData} from "../state";
import ItemsList from "../components/ItemsList";

function Content({tree, fetchData, treeMode}) {
    const [rootClicked, setRootClicked] = useState(false);
    const [districtClicked, setDistrictClicked] = useState({status: false, id: null});
    const [openedDistricts, setOpenedDistricts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    if (!tree) {
        return <div className={s.root}><img src={logo} style={{margin: '100px auto', height: '30px'}} alt=""/></div>
    }

    if (treeMode) {
        return <div className={s.root}>
            <ul>
                <li className={s.firstLayer}>
                    <span onClick={() => {
                        setRootClicked(!rootClicked)
                    }}>{tree.root.title}</span>
                    <ul className={s.secondLayer}>
                        {rootClicked &&
                        tree.root.federalDistricts.map((el) => <li onClick={() => {
                            if (!openedDistricts.includes(el.id)) {
                                setOpenedDistricts([...openedDistricts, el.id])
                            } else {
                                setOpenedDistricts(openedDistricts.filter(i => i !== el.id));
                            }
                        }}>
                            {el.title}
                            <ul className={s.thirdLayer}>
                                {openedDistricts.includes(el.id) &&
                                el.regions.map((el) => <li>
                                    {el.title}
                                </li>)
                                }

                            </ul>
                        </li>)}
                    </ul>
                </li>
            </ul>
        </div>
    } else {
        return (
            <div className={s.root}>
                <ItemsList
                    items={[tree.root]}
                    active={rootClicked && 0}
                    handleCLick={(v) => {
                        setRootClicked(!rootClicked);
                        setDistrictClicked({status: false, id: null});
                    }}
                />
                {rootClicked && (
                    <ItemsList
                        items={[tree.root.federalDistricts][0]}
                        active={districtClicked.id}
                        handleCLick={(id) => {
                            if (districtClicked.id === id) {
                                setDistrictClicked({status: false, id: null});
                            } else {
                                setDistrictClicked({status: true, id});
                            }
                        }}
                    />
                )}
                {rootClicked && districtClicked.status && (
                    <ItemsList
                        position={districtClicked.id}
                        items={tree.root.federalDistricts[districtClicked.id].regions}
                        handleCLick={(v) => {
                        }}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tree: state.location_tree.tree,
    treeMode: state.location_tree.treeMode
});

export default connect(mapStateToProps, {fetchData})(Content);