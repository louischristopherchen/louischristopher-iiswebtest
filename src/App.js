import React, { useState, useEffect } from 'react';
import { HorizontalBarChart, BarChart, Table, Toast, ToastExtend } from './components';
import styles from './app.module.css';
function App() {

  const [dataHorizontalBar, setDataHorizontalBar] = useState([]);
  const [dataBar, setDataBar] = useState([]);
  const [list, setList] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showToastExtend, setShowToastExtend] = useState(false)
  const { title_dashboard, right_to_left, from_bottom } = styles;

  useEffect(() => {
    getDataChart1();
    getDataChart2();
    getDataTable();
  }, [])

  function getDataChart1() {
    var resData = [
      { "month": 6, "totalOrder": 3 },
      { "month": 5, "totalOrder": 6 },
      { "month": 4, "totalOrder": 2 },
      { "month": 3, "totalOrder": 4 },
      { "month": 2, "totalOrder": 5 }
    ]
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var data = [];
    resData.map((item) => {
      data.push({ label: months[item.month - 1], value: "O" + item.totalOrder })
    })
    setDataHorizontalBar(data)
  }

  function getDataChart2() {
    var resData = [
      { "total": 400, "category": "kemeja" },
      { "total": 500, "category": "kemeja" },
      { "total": 100, "category": "kaos" },
      { "total": 100, "category": "kaos" },
      { "total": 100, "category": "kemeja" },
      { "total": 400, "category": "kemeja" },
      { "total": 500, "category": "kemeja" },
      { "total": 100, "category": "kaos" },
      { "total": 100, "category": "kemeja" },
      { "total": 400, "category": "kemeja" },
      { "total": 500, "category": "kaos" },
      { "total": 500, "category": "kaos" },
      { "total": 600, "category": "kaos" },
      { "total": 200, "category": "kemeja" },
      { "total": 100, "category": "kemeja" },
      { "total": 200, "category": "kaos" }
    ]
    var data = [];
    resData.map(item => {
      data.push({ value: item.total, label: item.category === 'kaos' ? 0 : 1 })
    })
    setDataBar(data)

  }

  function getDataTable(userId) {
    var resData = [
      { "_id": "5f1cf7dacd5e2832e8ab1027", "name": "M2", "category": "kemeja", "available": 1, "arrival": 1 },
      { "_id": "5f1cf7dacd5e2832e8ab1028", "name": "M2", "category": "kemeja", "available": 0, "arrival": 1 },
      { "_id": "5f1cf7dacd5e2832e8ab1029", "name": "Polo", "category": "kaos", "available": 1, "arrival": 0 },
      { "_id": "5f1cf7dacd5e2832e8ab1021", "name": "Polo", "category": "kaos", "available": 0, "arrival": 1 },
      { "_id": "5f1cf7dacd5e2832e8ab1022", "name": "M2", "category": "kemeja", "available": 1, "arrival": 0 },
      { "_id": "5f1cf7dacd5e2832e8ab1023", "name": "M2", "category": "kemeja", "available": 1, "arrival": 0 },
      { "_id": "5f1cf7dacd5e2832e8ab1024", "name": "M2", "category": "kemeja", "available": 0, "arrival": 1 },
      { "_id": "5f1cf7dacd5e2832e8ab1025", "name": "Polo", "category": "kaos", "available": 1, "arrival": 0 },
      { "_id": "5f1cf7dacd5e2832e8ab1026", "name": "M2", "category": "kemeja", "available": 0, "arrival": 1 },
      { "_id": "5f1cf7dacd5e2832e8ab101f", "name": "M2", "category": "kemeja", "available": 0, "arrival": 0 }
    ]
    var tempList = [];
    resData.map(item => {
      tempList.push({ ...item, checked: false, availability: item.available ? 'Available' : 'FULL', arrival: item.arrival ? 'Arrived' : `Hast'n arrived` })
    })
    setList(tempList)
  }

  function selectOne(row) {
    var tempList = [];
    var checkList = false;
    var checkToast = false;
    list.map((item) => {
      tempList.push(item)
    })
    tempList[row].checked = !tempList[row].checked
    tempList.map((item, index) => {
      if (!item.checked) {
        checkList = true;
      } else {
        checkToast = true
      }
    })
    setShowToast(checkToast)
    setCheckedAll(!checkList)
    setList(tempList)

  }

  function selectAll() {
    var checkList = false;
    var tempList = []
    list.map((item, index) => {
      tempList.push(item)
      if (!item.checked) {
        checkList = true;
      }
    })
    setShowToast(checkList)
    setCheckedAll(checkList);
    tempList.map((item) => {
      item.checked = checkList;
    })
    setList(tempList)
    var timestamp = new Date().toISOString()


  }

  function unSelectAll() {

    setShowToast(false)
    setCheckedAll(false);
    var tempList = [];
    list.map((item) => {
      tempList.push({ ...item, checked: false })
    })
    tempList.map((item) => {
      item.checked = false;
    })

    setList(tempList)
  }

  function doDelete() {
    var tempList = []
    list.map(item => {
      !item.checked && tempList.push(item)
    })
    setShowToast(false);
    unSelectAll();
    setList(tempList);

  }

  function openToastExtend() {
    setShowToastExtend(true)
  }

  function closeToastExtend() {
    setShowToastExtend(false)
  }

  function updateCategory(text) {
    var tempList = [];
    list.map(item => {
      item.checked ? tempList.push({ ...item, category: text }) : tempList.push(item);
    })
    setShowToast(false);
    setShowToastExtend(false)
    unSelectAll()
    setList(tempList)
  }

  const cols = [
    {
      title: 'Name',
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Category',
      render: (rowData) => {
        return <span>{rowData.category}</span>;
      },
    },
    {
      title: 'Availability',
      render: (rowData) => {
        return <span>{rowData.availability}</span>;
      },

    },
    {
      title: 'Arrival',
      render: (rowData) => {
        return <span>{rowData.arrival}</span>;
      },

    }

  ];

  return (
    <div>
      <div className={right_to_left}>
        <div className={title_dashboard}>
          Charts Visualization
      </div>
        <div className="container">
          <div style={{ width: '590px', display: 'inline-block' }}>
            <HorizontalBarChart label={'Chart 1'} data={dataHorizontalBar} pattern={['O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9']}  />
          </div>
          <div style={{ width: '590px', display: 'inline-block', marginLeft: '20px', verticalAlign: 'top', height: '100%' }}>
            <BarChart
              
              label={'Chart 2'}
              data={dataBar}
              pattern={[{ background: '#DAD7FE', label: 'Kaos' }, { background: '#4339F2', label: 'Kemeja' }]}
            />
          </div>
        </div>

      </div>
      <div className={`container ${from_bottom}`}>
        <Table cols={cols} list={list} selecOne={selectOne} checkedAll={checkedAll} selectAll={selectAll}  />
      </div>
      <Toast showToast={showToast} list={list} unSelectAll={unSelectAll} doDelete={doDelete} openToastExtend={openToastExtend} />

      {showToastExtend && <ToastExtend closeToastExtend={closeToastExtend} updateCategory={updateCategory} />}
    </div>
  );
}

export default (App);
