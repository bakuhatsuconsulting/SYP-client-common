'use strict';

/***********************************************************************************************************************************************
 * SYP.OFFICE.COMMON.COMPONENTS.TABLE
 ***********************************************************************************************************************************************
 * @description
 */
import React from 'react';
import Reactable from 'reactable';
import classnames from 'classnames';
import _ from 'lodash';

let Table = Reactable.Table;
let Thead = Reactable.Thead;
let Th = Reactable.Th;
let Tr = Reactable.Tr;
let Td = Reactable.Td;

export default class Component extends React.Component {
  constructor(props) {
    super();

    this.state = {data: props.data, rows: props.children, pagination: _.merge({enabled: false, size: 20, counter: 3, page: 0}, (props.pagination || {})), sortable: 
      props.sortable || !props.sortable && props.sortable !== undefined ? false : true, columns: props.columns || [], 
      classlist: props.className, noDataText: props.noDataText || 'No Data Returned'};
  }

  render() {
    var self = this;
    var dom;
    let classlist = {table: true, 'office-table': true} 

    this.state.classlist.split(' ').forEach(function(clss) {
      classlist[clss] = true;
    });

    classlist = classnames(classlist);

    dom = (
      <Table
        data={!this.state.rows && this.state.data}
        itemsPerPage={this.state.pagination.enabled && this.state.pagination.size}
        pageButtonLimit={this.state.pagination.enabled && this.state.pagination.counter}
        currentPage={this.state.pagination.page}
        sortable={this.state.sortable}
        noDataText={this.state.noDataText}                          
        className={classlist}>
        <Thead>
          {
            this.state.columns.map(function(column, idx) {
            return (<Th column={column.key} key={'TH-'+idx}>{column.label}</Th>)
           })
          }
        </Thead>
        
        {(function() {
          if(self.state.rows && self.state.rows.length) {
            return self.state.rows;
          }
        })()}
      </Table>
    )

    return dom;
  }
}