if (current.x_sccpl_fldservinc_field_service_incident.nil()) {
    //if (checkExistIncident(current.sys_id) == false) {
    var grFSI = new GlideRecord('x_sccpl_fldservinc_field_service_incident');
    grFSI.company = current.company;
    grFSI.opened_by = current.opened_by;
    grFSI.created_from_incident = current.sys_id;
    // if (GlidePluginManager.isRegistered('com.glide.domain'))
    //  grFSI.sys_domain = getDomain();
    grFSI.caller_id = current.caller_id;
    grFSI.is_the_caller_the_affected_user = current.u_is_the_caller_the_affected_user;
    grFSI.affected_user = current.u_affected_user;
    grFSI.contact_type = current.contact_type;
    grFSI.u_external_reference = current.u_external_reference;
    grFSI.short_description = current.short_description;
    grFSI.description = current.description.getHTMLValue();
    grFSI.cmdb_ci = current.cmdb_ci;
    grFSI.location = current.cmdb_ci.location;
    //
    grFSI.company = current.account;
    grFSI.opened_by = current.opened_by;
    grFSI.caller_id = current.contact;
    grFSI.contact_type = current.contact_type;
    grFSI.u_external_reference = current.u_external_reference;
    grFSI.short_description = current.short_description;
    grFSI.description = current.description;
    grFSI.cmdb_ci = current.cmdb_ci;
    grFSI.location = current.location;
    grFSI.priority = current.priority;