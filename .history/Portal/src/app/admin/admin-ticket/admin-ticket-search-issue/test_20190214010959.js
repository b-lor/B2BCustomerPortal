$(document).ready(function ()
    {
        // Setup - add a text input to each footer cell
        $('#DataTable tfoot th').each(function ()
        {
            var title = $(this).text();
            $(this).html('<input type="text" placeholder="Search ' + title + '" />');
        });

        $('#ExportButton').click(function ()
        {
            table.rows({ search: 'applied' }).data().each(function (value, index)
            {
                console.log(value, index);
            });
        });

        var table = $('#DataTable').DataTable({
            "lengthMenu": [[25, 50, 75, 100, 150, -1], [25, 50, 75, 100, 150, 'All']],
            "dom": '<"top"Bifpl<"clear">>rt<"bottom"ip<"clear">>',
            "buttons": [{
                extend: 'collection',
                text: 'Selection',
                buttons: ['selectAll', 'selectNone']
            }, {
                extend: 'collection',
                text: 'Export',
                buttons: ['export', 'excel', 'csv', 'pdf', { extend: 'excel',
                    text: 'Export Current Page',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    },
                    customize: function (xlsx)
                    {
                        var sheet = xlsx.xl.worksheets['sheet1.xml'];
                        $('row:first c', sheet).attr('s', '7');
                    }
                },
                {
                    text: 'Export All to Excel',
                    action: function (e, dt, button, config)
                    {
                        dt.one('preXhr', function (e, s, data)
                        {
                            data.length = -1;
                        }).one('draw', function (e, settings, json, xhr)
                        {
                            var excelButtonConfig = $.fn.DataTable.ext.buttons.excelHtml5;
                            var addOptions = { exportOptions: { 'columns': ':all'} };

                            $.extend(true, excelButtonConfig, addOptions);
                            excelButtonConfig.action(e, dt, button, excelButtonConfig);
                        }).draw();
                    }
                },
                {
                    text: 'Export All to Excel Test Two',
                    ajax: 
                    {
                        url: "./ServerSide.php?ExportToExcel=Yes",
                        type: "POST"
                    }
                }]
            }
            ],
            "fixedHeader": {
                header: true,
                footer: true
            },
            "select": true,
            "processing": true,
            /*"serverSide": true,
            "ajax": {
                "url": "./ServerSide.php",
                "type": "POST"
            },*/
            stateSave: true,
            //columnDefs: [{ visible: false, targets: 0}],
            initComplete: function ()
            {
                var api = this.api();

                // Apply the search
                api.columns().every(function ()
                {
                    var that = this;

                    $('input', this.footer()).on('keyup change', function ()
                    {
                        if (that.search() !== this.value)
                        {
                            that
                              .search(this.value)
                              .draw();
                        }
                    });
                });
            }
        });
    });

$.fn.dataTable.ext.buttons.export =
	{
		className: 'buttons-alert',
		id: 'ExportButton',
		text: "Export All Test III",
		action: function (e, dt, node, config)
		{
			var SearchData = dt.rows({ filter: 'applied' }).data();
			var OrderData = dt.order();
			//alert("Test Data for Searching: " + SearchData);
			//alert("Test Data for Ordering: " + OrderData);
			console.log(SearchData);
            var NumCol = SearchData[0].length;
            var NumRow = SearchData.length;
            console.log(SearchData[0].length);
            console.log(SearchData.length);
            var SearchData2 = [];
            //for (i = 0; i<NumCol; i++){
              for (j=0; j<NumRow; j++){
                SearchData2.push([SearchData[j]]);
              }
            //}
            console.log(SearchData2);
		}
	};