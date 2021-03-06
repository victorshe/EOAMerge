define("/DigiShell/js/defaultConfig-debug", [], function(require, exports) {
    var DEFAULT_MENU = {
        hotForm: [ {
            id: "root",
            level: 0
        }, {
            id: "MENU_YWB",
            ico: "icon-road",
            name: "业务部",
            parentId: "root"
        }, {
            id: "MENU_XSB",
            ico: "icon-truck",
            name: "销售部",
            parentId: "root"
        }, {
            id: "BJGZReport",
            ico: "",
            name: "发起部件故障报告流程",
            dbPath: "Application/Operation/BuJianGuZhangReport.nsf",
            form: "mainformXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "BFMProductLoan",
            ico: "",
            name: "发起产品库物料借用申请单",
            dbPath: "Application/Operation/ProductLoan.nsf",
            form: "mainformxp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "ProductPrice",
            ico: "",
            name: "发起产品报价全过程申请单",
            dbPath: "Application/Operation/ProductPrice.nsf",
            form: "DirectPriceApp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YWB_ShipArrNotice",
            ico: "",
            name: "发起装船或到货通知",
            dbPath: "Application/Operation/ShipmentOrArrivalNotice.nsf",
            form: "Notice",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "DF_A_03_01",
            ico: "",
            name: "发起国内部件\\日本资料\\维修部件到货通知流程",
            dbPath: "Application/Operation/ArrivalNoticeApp.nsf",
            form: "ArrivalNoticeXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YYB_YFJS",
            ico: "",
            name: "发起运费结算申请",
            dbPath: "Application/Operation/FreightSettlement.nsf",
            form: "mainformxp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YWBJB",
            ico: "",
            name: "发起加班请示报告申请",
            dbPath: "Application/Operation/OverTimeQSReport.nsf",
            form: "mainformXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "DeliveryNotice",
            ico: "",
            name: "发起日发货计划下达申请",
            dbPath: "Application/Operation/DeliveryNotice.nsf",
            form: "DeliveryNoticePage",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "InventoryReportnew",
            ico: "",
            name: "发起盘点报告申请",
            dbPath: "Application/Operation/InventoryReport.nsf",
            form: "InventoryReportPage",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "AdjustOrder",
            ico: "",
            name: "发起订货调整审批申请",
            dbPath: "Application/Operation/AdjustOrder.nsf",
            form: "AdjustOrderPage",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "ss01",
            ico: "",
            name: "发起产品销售合同变更流程",
            dbPath: "Application/Business/selconcha.nsf",
            form: "xpmain",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ss03",
            ico: "",
            name: "发起产品销售欠款申请",
            dbPath: "Application/Business/salearrearage.nsf",
            form: "xpmain",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_jjzjdh_fanuc",
            ico: "",
            name: "发起紧急追加订货审批流程",
            dbPath: "Application/Business/EmergencyAddedOrder.nsf",
            form: "EmergencyAddedOrderXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_jzdhsp_fanuc",
            ico: "",
            name: "发起集中订货审批流程",
            dbPath: "Application/Business/CentralizedOrderApp.nsf",
            form: "CentralizedOrderAppXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ssb03",
            ico: "",
            name: "发起订发货预测数据汇总审批表",
            dbPath: "Application/Business/DataSheetCollent.nsf",
            form: "xpmain",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ssb04",
            ico: "",
            name: "发起订发货预测数据审批表",
            dbPath: "Application/Business/DataSheetAudit.nsf",
            form: "xpmain",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_xsfhbg_fanuc",
            ico: "",
            name: "发起销售发货变更流程",
            dbPath: "Application/Business/SalesDeliveryChanges.nsf",
            form: "SalesDeliveryChangesXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_xsxygd_fanuc",
            ico: "",
            name: "发起销售协议归档流程",
            dbPath: "Application/Business/SalesAgreementArchived.nsf",
            form: "SalesAgreementArchivedXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_jjzjdh_fanuc",
            ico: "",
            name: "发起紧急追加订货流程",
            dbPath: "Application/Business/EmergencyAddedOrder.nsf",
            form: "EmergencyAddedOrderXp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "BFMProductOrder",
            ico: "",
            name: "发起发那科（天津）产品贸易订货流程",
            dbPath: "Application/Business/DigiFlowProductOrder.nsf",
            form: "mainformxp",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        } ],
        hotApp: [ {
            id: "root",
            level: 0
        }, {
            id: "MENU_YWB",
            ico: "icon-road",
            name: "业务部",
            parentId: "root"
        }, {
            id: "MENU_XSB",
            ico: "icon-truck",
            name: "销售部",
            parentId: "root"
        }, {
            id: "BJGZReport",
            ico: "",
            name: "部件故障报告流程",
            dbPath: "Application/Operation/BuJianGuZhangReport.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "BFMProductLoan",
            ico: "",
            name: "产品库物料借用申请",
            dbPath: "Application/Operation/ProductLoan.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "ProductPrice",
            ico: "",
            name: "产品报价全过程申请",
            dbPath: "Application/Operation/ProductPrice.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YWB_ShipArrNotice",
            ico: "",
            name: "装船或到货通知",
            dbPath: "Application/Operation/ShipmentOrArrivalNotice.nsf",
            view: "vwDone",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "DF_A_03_01",
            ico: "",
            name: "国内部件\\日本资料\\维修部件到货通知",
            dbPath: "Application/Operation/ArrivalNoticeApp.nsf",
            view: "ArrivalNoticeDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YYB_YFJS",
            ico: "",
            name: "运费结算",
            dbPath: "Application/Operation/FreightSettlement.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "YWBJB",
            ico: "",
            name: "加班请示报告",
            dbPath: "Application/Operation/OverTimeQSReport.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "DeliveryNotice",
            ico: "",
            name: "日发货计划下达",
            dbPath: "Application/Operation/DeliveryNotice.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "InventoryReportnew",
            ico: "",
            name: "盘点报告",
            dbPath: "Application/Operation/InventoryReport.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "AdjustOrder",
            ico: "",
            name: "订货调整审批",
            dbPath: "Application/Operation/AdjustOrder.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_YWB"
        }, {
            id: "ss01",
            ico: "",
            name: "产品销售合同变更",
            dbPath: "Application/Business/selconcha.nsf",
            view: "vwAll",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ss03",
            ico: "",
            name: "产品销售欠款申请",
            dbPath: "Application/Business/salearrearage.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_jzdhsp_fanuc",
            ico: "",
            name: "集中订货审批",
            dbPath: "Application/Business/CentralizedOrderApp.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_jjzjdh_fanuc",
            ico: "",
            name: "紧急追加订货",
            dbPath: "Application/Business/EmergencyAddedOrder.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_xsfhbg_fanuc",
            ico: "",
            name: "销售发货变更",
            dbPath: "Application/Business/SalesDeliveryChanges.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "menu_xsxygd_fanuc",
            ico: "",
            name: "销售协议归档",
            dbPath: "Application/Business/SalesAgreementArchived.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "BFMProductOrder",
            ico: "",
            name: "发那科（天津）产品贸易订货流程",
            dbPath: "Application/Business/DigiFlowProductOrder.nsf",
            view: "vwDoing",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ssb03",
            ico: "",
            name: "订发货预测数据汇总表",
            dbPath: "Application/Business/DataSheetCollent.nsf",
            view: "vwAll",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ssb04",
            ico: "",
            name: "订发货预测数据审批表",
            dbPath: "Application/Business/DataSheetAudit.nsf",
            view: "vwAll",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        }, {
            id: "ssconfig",
            ico: "",
            name: "业务基础数据配置",
            dbPath: "Application/SellConfig.nsf",
            view: "MTBConfig",
            source: "menuInfoXAgent.xsp",
            parentId: "MENU_XSB"
        } ],
        "switch": [ {
            id: "root",
            level: 0
        }, {
            id: "company",
            name: "公司首页",
            ico: "icon-building",
            opt: "digishell.theme.switchConfig('company')",
            parentId: "root"
        }, {
            id: "personal",
            name: "个人首页",
            ico: "icon-user",
            opt: "digishell.theme.switchConfig('personal')",
            parentId: "root"
        }, {
            id: "www_Home",
            name: "外网首页",
            ico: "icon-globe",
            opt: "window.open('http://www.bj-fanuc.com.cn','_blank')",
            parentId: "root"
        }, {
            id: "hrsystem",
            name: "HR系统",
            ico: "icon-group",
            opt: "window.open('/Produce/DigiFlowSynchronizeData.nsf/xpHRLogin.xsp','_blank')",
            parentId: "root"
        } ]
    };
    exports.DEFAULT_MENU = DEFAULT_MENU;
});