package com.itheima.service.impl;

import com.itheima.mapper.DeptLogMapper;
import com.itheima.pojo.DeptLog;
import com.itheima.service.DeptLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DeptLogServiceImpl implements DeptLogService {

    @Autowired
    private DeptLogMapper deptLogMapper;


    @Transactional(propagation/*传播行为*/ = Propagation.REQUIRES_NEW)//REQUIRES_NEW 在调用当前方法时，会挂起当前方法中已存在的事务，创建一个新的事
    // 务供其使用，当前事务运行完成时，再运行刚才挂起的事务。这样做可以
    //确保父事务中中出异常，回滚了，但是子事务（即当前事务）不受影响。
    //运用场景：删除部门同时删除员工，并记录日志。
    // 由于某些因素，删除部门后出现异常，导致整个事务需要回滚。但是，记录日志的操作是不应该回滚的。因此需要创建一个新的事务，来确保插入日志的逻辑不会回滚！！！
    //总结：REQUIRED:大部分情况下都是用该传播行为即可
    //REQUIRES_NEW：当我们不希望事务之间互相影响时，可以用该传播行为。如：下订单前需要记录日志，不论订单保存成功与否，都需要保证日志记录成功！
    @Override
    public void insert(DeptLog deptLog) {
        deptLogMapper.insert(deptLog);
    }
}
