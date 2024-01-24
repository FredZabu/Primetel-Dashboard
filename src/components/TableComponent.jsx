import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import PaginationButton from "./PaginationButton";
import { Table } from "flowbite-react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removePatient } from "../store"; 
import { useState } from "react";

import EditModal from "../modals/EditModal.jsx";
import ViewModal from "../views/ViewModal.jsx";


const TableComponent = ({ tableHeaders, tableData, status, actions, funct }) => {

  const [dataNeeded, setDataNeeded] = useState({})

  const [openModal, setOpenModal] = useState(false)

  const [openView, setOpenView] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
      <Table hoverable>
        <Table.Head>
          {tableHeaders.map((header, index) => {
            return <Table.HeadCell key={index}>{header}</Table.HeadCell>;
          })}
          {status && <Table.HeadCell>Status</Table.HeadCell>}
          {actions && <Table.HeadCell>Actions</Table.HeadCell>}
        </Table.Head>

        <Table.Body className="divide-y">
          {tableData.length !== 0 ? (
            tableData.map((data, index) => {

              const { id } = data;
              return (
                <>                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                 
                  {tableHeaders.map((header, index) => (
                    <Table.Cell
                      key={index}
                      className="whitespace-nowrap font-medium text-greyDark dark:text-white"
                    >
                      {data[header]}
                      
                    </Table.Cell>
                  ))}

                    

                  {status && (
                    <Table.Cell>
                      <div className="flex">
                        <span
                          className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${
                            data.Status === "Upcoming"
                              ? " text-green bg-green/20"
                              : data.Status == "Past"
                              ? " text-orange bg-orange/20"
                              : " text-primary bg-primary/20"
                          }`}
                        >
                          {data.Status}
                        </span>
                      </div>
                    </Table.Cell>
                  )}

                  {actions && (
                    <Table.Cell>
                      <div className="flex space-x-2">
                        <a
                          className="font-medium text-green hover:underline hover:scale-110 duration-150 cursor-pointer"
                          onClick={()=>setOpenView(!openView)}
                        >
                          <FaEye size={18} />
                        </a>
                        <a
                          className="font-medium text-orange hover:underline hover:scale-110 duration-150 cursor-pointer"
                         onClick={() => {
                            setOpenModal(true);
                           console.log(data);
                           setDataNeeded(data);
                          }}
                        >
                          <FaEdit size={18}/>
                        </a>
                        <a
                          className="font-medium text-primary hover:underline hover:scale-110 duration-150 cursor-pointer"
                          
                          onClick={() => {
                            console.log("Here it is"+ id);
                            dispatch(removePatient(id));

                          }}
                        >
                          <FaTrash size={18}/>
                        </a>
                        
                      </div>
                    </Table.Cell>
                  )}
                                
                </Table.Row>
                  
               
                  </>

              );
            })
          ) : (
            <div className=" rounded-md flex items-center justify-center py-4 text-xl font-bold">
              No Patients to Display
            </div>
          )}
        </Table.Body>
      </Table>

      <PaginationButton className="my-5" />
      {openModal ? <EditModal openModal={openModal} setOpenModal={setOpenModal} funct='Patient' data={dataNeeded} /> : ''}
      { openView? <ViewModal openView = {openView} setOpenView={setOpenView} funct = {funct} data = {dataNeeded} /> : ''}
    </>
  );
};

export default TableComponent;
TableComponent.propTypes = {
  tableHeaders: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  status: PropTypes.bool.isRequired,
  actions: PropTypes.bool.isRequired,
  funct: PropTypes.string
};
