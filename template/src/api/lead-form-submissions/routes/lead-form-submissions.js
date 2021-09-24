module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/lead-form-submissions',
      handler: 'lead-form-submissions.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submissions.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/lead-form-submissions',
      handler: 'lead-form-submissions.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submissions.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/lead-form-submissions/:id',
      handler: 'lead-form-submissions.delete',
      config: { policies: [] }
    }
  ]
}