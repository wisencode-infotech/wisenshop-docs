$(document).ready(function () {
    var table = $('#inquiries-table').DataTable({
        processing: true,
        serverSide: true,
        ajax: APP_BACKEND_URL + '/inquiry',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex', orderable: false, searchable: false },
            { data: 'name', name: 'name' },
            { data: 'email', name: 'email' },
            { data: 'subject', name: 'subject' },
            { 
                data: 'action', 
                name: 'action', 
                orderable: false, 
                searchable: false 
            }
        ],
        // Add dom option to customize layout
        dom: '<"row"<"col-sm-12"tr>>' +
        '<"row align-items-center justify-content-center"<"col-sm-4"l><"col-sm-4 text-center"i><"col-sm-4"p>>',
        lengthMenu: [ [10, 25, 50, 100], [10, 25, 50, 100] ], // Define entries options
        pageLength: 10 // Default page size
    });

    // Search functionality
    $('#searchTableList').on('keyup', function () {
        table.search(this.value).draw();
    });
});
